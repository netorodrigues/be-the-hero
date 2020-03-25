const connection = require('../database/connections')

module.exports = {
    async create(request, response){
        const { ong_id } = request.body;

        const ong = await connection("ongs")
        .where("id", ong_id)
        .select("name")
        .first();

        if (!ong)
            return response.status(400).json({error: "ONG not found"});

        return response.json(ong)
    }
}