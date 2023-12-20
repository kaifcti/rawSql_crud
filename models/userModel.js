const db = require("../database/connection")

module.exports = {
    // getAllAdminRaceData: async (id) => {
    //     return db.query(
    //         `select * from race  where race.id = ?`, [id]
    //     );
    // },


    insertIntoDb: async (data) => {
        
            return db.query('INSERT INTO user SET ?', [data]);
       
    },

    fetchIntoDb: async (id) => {
        try {
            const result = await db.query(`SELECT u_name,u_sal from user where u_id=?`,[id]);
            return result;
        } catch (error) {
            console.error('Database query error:', error);
            throw error; // Re-throw the error to be caught in the calling function
        }
    },
     

    updateIntoDb: async(data,id)=>{
        try {
            const result = await db.query(`UPDATE user SET u_sal =?, u_name =? WHERE u_id =?`,[data.u_sal,data.u_name,id]);
            return result;
        } catch (error) {
            console.error('Database query error:', error);
            throw error; // Re-throw the error to be caught in the calling function
        }
    },
 

    deleteIntoDb: async(id)=>{
        try {
            const result= await db.query(`Delete from user where u_id=?`,[id])
            return result;
            
        } catch (error) {
            console.error('Database query error:', error);
            throw error; // Re-throw the error to be caught in the calling function
        }
       
    },


    fetchDetails: async()=>{
      try {
        const result = await db.query(`SELECT * from user`);
        return result;
        
      } catch (error) {
        console.error('Database query error:', error);
            throw error; // Re-throw the error to be caught in the calling function
        }
      }
    }
