import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const MarksChart = ({ marksPromise }) => {
    const marksDataRes = use(marksPromise);
    const marksData = marksDataRes.data;

    // data processing for the chart
    const marksChartData = marksData.map(studentData => {
        const student = {
            id: studentData.student_id,
            name: studentData.name,
            physics: studentData.marks.physics,
            chemistry: studentData.marks.chemistry,
            math: studentData.marks.math
        }

        const avg = (student.physics + student.chemistry + student.math) / 3;
        student.avg = avg;

        return student;
    })

    return (
        <div>
            <BarChart width={800} height={600} data={marksChartData}>
                <XAxis dataKey={"name"} />
                <YAxis />
                <Bar dataKey={"avg"} fill="grey" />
                <Bar dataKey={"physics"} fill="orange" />
            </BarChart>
        </div>
    );
};

export default MarksChart;