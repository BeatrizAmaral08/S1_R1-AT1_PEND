import pool from "../config/db.js";

const categoriaModel = {
    insert: async (cCategoria) => {
        const sql = 'INSERT INTO categoria (idCategoria, nomeCategoria) VALUES (?,?);'
        const values = [cCategoria.idCategoria, cCategoria.nomeCategoria];
        const [rows] = await pool.execute(sql, values)
        return rows;
    },
    selectAll: async () => {
        const sql = "SELECT * FROM categoria;";
        const [rows] = await pool.execute(sql);
        return rows;
        
    }
}
export default categoriaModel