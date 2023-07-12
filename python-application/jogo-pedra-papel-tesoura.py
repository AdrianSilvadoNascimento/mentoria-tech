from Pedra_Papel_Tesoura import Pedra_Papel_Tesoura

class Menu(Pedra_Papel_Tesoura):
  def __init__(self):
    super().__init__()

  def mostrarMenu(self):
    while True:
      print('Menu:')
      print('1 - Jogar')
      # print('2 - Melhor de 3')
      print('3 - Mostrar Placar')
      print('4 - Sair')

      escolha_usuario = int(input('Escolha uma opção: '))

      if escolha_usuario == 1:
        self.jogar()
      # elif escolha_usuario == 2:
      #   self.melhor_de_3()
      elif escolha_usuario == 3:
        self.mostrar_placar()
      elif escolha_usuario == 4:
        break
      else:
        print('Escolha inválida! Por favor, forneca uma opção válida')

jogo_pedra_papel_tesoura = Menu()
jogo_pedra_papel_tesoura.mostrarMenu()
