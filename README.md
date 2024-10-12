# Target Calculation Excluding Specific Days

## Student Information
- **Name:** Abdinajib Mohamed Hassan
- **Class ID:** C1210027
- **Class Name:** CA211

## Description

This project implements a function `calculateTotalTarget` that calculates the proportional distribution of an annual target across multiple months, excluding Fridays from the working days. The function takes into account the specific requirements of calculating based only on the working days for each month between the given start and end dates.

## How to Run the Code

1. Ensure you have Node.js installed on your system.
2. Clone this repository to your local machine.
3. Navigate to the project directory in your terminal.
4. Run the following command to execute the script:

   ```bash
   node calculate_target.js
   ```

## Function Explanation

The `calculateTotalTarget` function takes three parameters:
- `startDate` (string in `YYYY-MM-DD` format): The start of the period for calculation.
- `endDate` (string in `YYYY-MM-DD` format): The end of the period for calculation.
- `totalAnnualTarget` (number): The annual target amount to be distributed.

The function performs the following steps:
1. Calculates the total number of working days for each month in the given period, excluding Fridays.
2. Determines the exact number of days worked within the given range, excluding Fridays.
3. Proportionally distributes the total annual target across the valid working days in each month.
4. Returns an object with the required information.

## Example Usage

```javascript
const result = calculateTotalTarget('2024-01-01', '2024-03-31', 5220);
console.log(result);
```

Output:
```json
{
  "daysExcludingFridays": [27, 25, 26],
  "daysWorkedExcludingFridays": [27, 25, 26],
  "monthlyTargets": [435, 434.99999999999994, 435],
  "totalTarget": 1305
}
```

## Performance

A performance test was conducted with the following results:

```
Performance Test Results:
Total time for 1000 iterations: 383.25 ms
Average time per call: 0.3832 ms
```

This indicates that the function is very fast, with an average execution time of 0.3832 milliseconds per call.

## Assumptions and Limitations

1. The function assumes that the input dates are valid and in the correct format (`YYYY-MM-DD`).
2. The calculation is based on the Gregorian calendar.
3. The function does not account for holidays or other non-working days besides Fridays.
4. The precision of financial calculations may be affected by JavaScript's floating-point arithmetic.

## Future Improvements

- Implement dynamic exclusion of different days of the week.
- Add handling for holidays and other custom non-working days.
- Improve precision for financial calculations.