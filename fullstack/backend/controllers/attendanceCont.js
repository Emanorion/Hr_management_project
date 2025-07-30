// meant to run and execute all the functions from your model
const { getAttendance, getAttendanceByDate } = require('../model/attendanceModel.js');

const EmployeeGet = async (req,res) => {
    res.json({
        Attendance: await getAttendance()
    });
};

const getAttendanceRecords = async (req, res) => {
    const date = req.query.date || null; // Get date from query parameter

    try {
        // Use the flexible getAttendanceByDate model function
        const attendanceData = await getAttendanceByDate(date); 

        res.status(200).json({
            message: `Attendance data ${date ? 'for ' + date : 'all'} fetched successfully`,
            data: attendanceData
        });
    } catch (error) {
        console.error("Error in getAttendanceRecords controller:", error);
        res.status(500).json({
            message: "Failed to retrieve attendance data by date.",
            error: error.message
        });
    }
};

module.exports = {
    EmployeeGet,
    getAttendanceRecords
};



