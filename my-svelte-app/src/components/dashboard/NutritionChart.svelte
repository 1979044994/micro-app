<script>
  export let nutritionDistribution = {
    carbs: 45,
    protein: 30,
    fat: 25,
  };
</script>

<div class="nutrition-distribution">
  <h4>今日营养素分布</h4>
  <div class="nutrition-chart">
    <div class="nutrition-bar">
      <div class="carbs-bar" style="width: {nutritionDistribution.carbs}%">
        <span class="nutrition-label">碳水 {nutritionDistribution.carbs}%</span>
      </div>
      <div class="protein-bar" style="width: {nutritionDistribution.protein}%">
        <span class="nutrition-label"
          >蛋白质 {nutritionDistribution.protein}%</span
        >
      </div>
      <div class="fat-bar" style="width: {nutritionDistribution.fat}%">
        <span class="nutrition-label">脂肪 {nutritionDistribution.fat}%</span>
      </div>
    </div>
    <div class="nutrition-legend">
      <div class="legend-item">
        <div class="legend-color carbs-color"></div>
        <span>碳水化合物</span>
      </div>
      <div class="legend-item">
        <div class="legend-color protein-color"></div>
        <span>蛋白质</span>
      </div>
      <div class="legend-item">
        <div class="legend-color fat-color"></div>
        <span>脂肪</span>
      </div>
    </div>
  </div>
</div>

<style>
  .nutrition-distribution {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid #eee;
  }

  .nutrition-distribution h4 {
    margin-top: 0;
    color: var(--text-secondary);
    font-size: 0.85rem;
    margin-bottom: 10px;
  }

  .nutrition-bar {
    min-height: 30px;
    display: flex;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 12px;
  }

  .carbs-bar,
  .protein-bar,
  .fat-bar {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 0.75rem;
    font-weight: bold;
    transition: width 0.3s ease;
    padding: 0 4px;
    min-width: 30px;
  }

  .carbs-bar {
    background: linear-gradient(to right, #7cb342, #8bc34a);
  }

  .protein-bar {
    background: linear-gradient(to right, #1e88e5, #42a5f5);
  }

  .fat-bar {
    background: linear-gradient(to right, #fb8c00, #ffa726);
  }

  .nutrition-label {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0 4px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    font-size: 11px;
    max-width: 100%;
  }

  .nutrition-legend {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 8px;
  }

  .legend-item {
    display: flex;
    align-items: center;
    font-size: 0.75rem;
  }

  .legend-color {
    width: 12px;
    height: 12px;
    border-radius: 3px;
    margin-right: 4px;
    flex-shrink: 0;
  }

  .legend-color.carbs-color {
    background-color: #8bc34a;
  }

  .legend-color.protein-color {
    background-color: #42a5f5;
  }

  .legend-color.fat-color {
    background-color: #ffa726;
  }
</style>
