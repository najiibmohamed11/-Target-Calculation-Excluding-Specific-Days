function calculateTotalTarget(startDate, endDate, totalAnnualTarget) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const oneDay = 24 * 60 * 60 * 1000; // milliseconds in a day
    
    let workingDays = [];
    let currentDate = new Date(start);
    
    while (currentDate <= end) {
        if (currentDate.getDay() !== 5) { // 5 is Friday
            workingDays.push(currentDate.getMonth());
        }
        currentDate = new Date(currentDate.getTime() + oneDay);
    }
    
    const monthCounts = workingDays.reduce((acc, month) => {
        acc[month] = (acc[month] || 0) + 1;
        return acc;
    }, {});
    
    const activeMonths = Object.keys(monthCounts).length;
    const monthlyTarget = totalAnnualTarget / 12;
    
    const result = {
        daysExcludingFridays: [],
        daysWorkedExcludingFridays: [],
        monthlyTargets: [],
        totalTarget: activeMonths * monthlyTarget
    };
    
    for (let i = 0; i < 12; i++) {
        if (monthCounts[i]) {
            result.daysExcludingFridays.push(monthCounts[i]);
            result.daysWorkedExcludingFridays.push(monthCounts[i]);
            result.monthlyTargets.push(monthlyTarget);
        }
    }
    
    return result;
}

// Example usage
console.log(calculateTotalTarget('2024-01-01', '2024-03-31', 5220));
function runPerformanceTest(iterations = 1000) {
    const startDate = '2024-01-01';
    const endDate = '2024-12-31';
    const totalAnnualTarget = 5220;

    const start = performance.now();

    for (let i = 0; i < iterations; i++) {
        calculateTotalTarget(startDate, endDate, totalAnnualTarget);
    }

    const end = performance.now();
    const totalTime = end - start;
    const averageTime = totalTime / iterations;

    console.log(`Performance Test Results:`);
    console.log(`Total time for ${iterations} iterations: ${totalTime.toFixed(2)} ms`);
    console.log(`Average time per call: ${averageTime.toFixed(4)} ms`);
}

// Run the performance test
runPerformanceTest();