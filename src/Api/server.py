from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/cadastro", methods=["POST"])

def criarCadastro():
    funcao = request.form["funcao"]
    nome = request.form["nome"]
    email = request.form["email"]
    senha = request.form["senha"]

    dados = {"nome": nome, "email": email, "senha": senha, "funcao": funcao}

    if funcao == "Restaurante":
        latitute = request.form["latitude"]
        longitude = request.form["longitude"]
        dados["latitude"] = latitute
        dados["longitude"] = longitude


    return jsonify(dados)

if __name__ == "__main__":
    app.run(debug=True)