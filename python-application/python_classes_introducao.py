#  javascript let variavel = {nome: 'adrian'}

# class Pessoa:
#   def __init__(self, nome, idade):
#     self.nome = nome
#     self.idade = idade

# adrian = Pessoa('Adrian', '21')
# print(adrian)
# print(adrian.nome)
# print(adrian.idade)

# pedro = Pessoa('Pedro', '21')
# print(pedro)
# print(pedro.nome)
# print(pedro.idade)

# joao = Pessoa('Joao', '21')
# print(joao)
# print(joao.nome)
# print(joao.idade)

# ----------- DESAFIOS -----------
# Dada a seguinte função, como podemos refatorar da melhor maneira possível?
# def fazer_login(nome_usuario, senha, email):
#   print(nome_usuario)
#   print(senha)
#   print(email)

# def login(nome_usuario, email_usuario, senha_usuario):
#   print('Usuário fez login com sucesso')

class Usuario:
  def __init__(self, nome_usuario, email_usuario, senha_usuario):
    self.nome_usuario = nome_usuario
    self.email_usuario = email_usuario
    self.senha_usuario = senha_usuario

def login(usuario: Usuario):
  print('usuario logou com:', usuario.nome_usuario)

# adrian = Usuario('Adrian', 'email@exemplo.com', '123456')
# pedro = Usuario('Pedro', 'email@exemplo.com', '123456')
# joao = Usuario('Joao', 'email@exemplo.com', '123456')

# login(adrian)
# login(pedro)
# login(joao)

nome = input('Digite o nome: ')
email = input('Digite o email: ')
senha = input('Digite o senha: ')

novo_usuario = Usuario(nome, email, senha)
login(novo_usuario)

# Crie uma classe chamada Livro que represente um livro.
# A classe deve ter atributos de instância para o título, autor e ano de publicação do livro.
# Além disso, a classe deve ter um método para exibir as informações do livro.