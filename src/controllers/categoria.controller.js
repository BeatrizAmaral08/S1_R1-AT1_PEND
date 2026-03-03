const categoriaController = {

    criarCategoria: async (req, res) => {
        try {
            const { idCategoria, nomeCategoria } = req.body;

            if (!idCategoria || !nomeCategoria) {
                return res.status(400).json({
                    erro: "Campos obrigatórios não foram preenchidos"
                });
            }

            const idCategoriaExiste = await categoriaModel.buscarId(idCategoria);

            if (idCategoriaExiste && idCategoriaExiste.length > 0) {
                return res.status(400).json({
                    erro: "ID da categoria já foi cadastrado no sistema!"
                });
            }

            const result = await categoriaModel.inserirCategoria(
                idCategoria,
                nomeCategoria
            );

            return res.status(201).json({
                mensagem: "Categoria cadastrada com sucesso!",
                idCategoria: result.idCategoria
            });

        } catch (error) {
            console.error("Erro ao criar categoria:", error);
            return res.status(500).json({
                erro: "Erro interno ao cadastrar categoria"
            });
        }
    },

    listarCategoria: async (req, res) => {
        try {
            const { idCategoria } = req.query;

            if (idCategoria) {
                const categoria = await categoriaModel.buscarUma(idCategoria);

                if (!categoria || categoria.length === 0) {
                    return res.status(404).json({
                        erro: "Categoria não encontrada"
                    });
                }

                return res.status(200).json(categoria[0]);
            }

            const categorias = await categoriaModel.listarTodas();
            return res.status(200).json(categorias);

        } catch (error) {
            console.error("Erro ao listar categorias:", error);
            return res.status(500).json({
                erro: "Erro interno ao listar categorias"
            });
        }
    }

};

module.exports = { categoriaController };