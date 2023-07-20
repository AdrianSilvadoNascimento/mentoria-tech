# Métodos de requisições
# POST, GET, PUT/PATCH e DELETE

# FAMOSO CRUD:
# C REATE
# R EAD
# U PDATE
# D ELETE

# URL = caminho do servidor. Ex.: https://google.com
# GET = Requisição de busca. Ex.: get('https://google.com')
# POST = requisição de envio de dados ou informações. Ex.: post('https://google.com', obj =  { "id": 1 "nome": "adrian" })
# PUT = put('https://google.com', { "nome": "Silva" }, "id")
# DELETE = delete('https://google.com', "id")

objetos = [{ "id": 1, "nome": "adrian" }]

# GET
def exemploGet():
  print('ROTA GET')
  print(objetos)

exemploGet()

# POST
def exemploPost(novoValor):
  print('ROTA POST')
  print('antes:', objetos)
  objetos.append(novoValor)
  print('depois:', objetos)

novoObjeto = { "id": 2, "nome": "Keven" }
exemploPost(novoObjeto)

# PUT
def exemploPut(novoValor, id):
  referencia = objetos

  print('ROTA PUT')
  print('antes:', referencia)

  for a in referencia:
    if id == a["id"]:
      print('antes:', a)
      a["nome"] = novoValor["nome"]
      print('depois:', a)

  print('antes:', referencia)

exemploPut({ "nome": "Silva" }, 1)

# DELETE
def exemploDelete(id):
  referencia = objetos

  print('ROTA DELETE')
  print('antes:', referencia)

  for a in referencia:
    if id == a["id"]:
      objetos.remove(a)

  print('depois:', referencia)

exemploDelete(1)