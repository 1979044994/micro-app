import WaterMetric from '@/components/dashboard/WaterMetric.svelte';
import { fireEvent, render } from '@testing-library/svelte';
import { beforeEach, describe, expect, test, vi } from 'vitest';

describe('WaterMetric 组件', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  test('正确计算水分百分比', () => {
    const { getByText } = render(WaterMetric, {
      props: { waterIntake: 4, waterGoal: 8 }
    });

    // 验证显示正确的饮水量
    expect(getByText('4')).toBeTruthy();
    expect(getByText('/')).toBeTruthy();
    expect(getByText('8')).toBeTruthy();

    // 验证进度条宽度 (需要通过DOM测试)
    const progressFill = document.querySelector('.progress-fill');
    expect(progressFill.style.width).toBe('50%');
  });

  test('正确显示剩余杯数信息', () => {
    const { getByText } = render(WaterMetric, {
      props: { waterIntake: 6, waterGoal: 8 }
    });

    expect(getByText('再喝 2 杯可达成今日目标')).toBeTruthy();
  });

  test('达到目标时显示祝贺信息', () => {
    const { getByText } = render(WaterMetric, {
      props: { waterIntake: 8, waterGoal: 8 }
    });

    expect(getByText('恭喜！已达成今日饮水目标')).toBeTruthy();
  });

  test('超过目标时百分比不超过100%', () => {
    const { getByText } = render(WaterMetric, {
      props: { waterIntake: 10, waterGoal: 8 }
    });

    // 即使超过目标，百分比也应该是100%
    const progressFill = document.querySelector('.progress-fill');
    expect(progressFill.style.width).toBe('100%');
  });

  test('点击按钮触发addWater事件', async () => {
    const mockDispatch = vi.fn();
    const { component, getByText } = render(WaterMetric, {
      props: { waterIntake: 4, waterGoal: 8 }
    });

    // 监听组件事件
    const spy = vi.fn();
    component.$on('addWater', spy);

    // 点击"喝一杯水"按钮
    const button = getByText('喝一杯水');
    await fireEvent.click(button);

    // 验证事件被触发
    expect(spy).toHaveBeenCalled();

    // 验证按钮在动画期间被禁用
    expect(button.disabled).toBe(true);

    // 快进动画时间
    vi.advanceTimersByTime(1000);

    // 动画结束后按钮应该被启用
    expect(button.disabled).toBe(false);
  });

  test('水杯数组正确渲染', () => {
    const { container } = render(WaterMetric, {
      props: { waterIntake: 3, waterGoal: 8 }
    });

    const bottles = container.querySelectorAll('.bottle');
    expect(bottles.length).toBe(8);

    // 检查已填充和未填充的瓶子数量
    const filledBottles = container.querySelectorAll('.bottle.filled');
    expect(filledBottles.length).toBe(3);

    const unfilledBottles = container.querySelectorAll('.bottle:not(.filled)');
    expect(unfilledBottles.length).toBe(5);
  });
});
