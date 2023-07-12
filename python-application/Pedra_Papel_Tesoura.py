import random

class Pedra_Papel_Tesoura:
  def __init__(self):
    self.placar = { 'usuario': 0, 'computador': 0 }
  
  def jogar(self):
    escolhas_possiveis = ['pedra', 'papel', 'tesoura']

    escolha_usuario = input('Escolha pedra, papel ou tesoura: ').lower()

    while escolha_usuario not in escolhas_possiveis:
      print('Escolha inválida! Forneça um valor válido.')
      escolha_usuario = input('Escolha pedra, papel ou tesoura: ').lower()
    
    escolha_maquina = random.choice(escolhas_possiveis)

    print('Escolha da máquina:', escolha_maquina)

    if escolha_usuario == escolha_maquina:
      print('Empate!')
    elif (
      (escolha_usuario == "pedra" and escolha_maquina == "tesoura")
      or (escolha_usuario == "papel" and escolha_maquina == "pedra")
      or (escolha_usuario == "tesoura" and escolha_maquina == "papel")
    ):
      print('Você ganhou!')
      self.placar["usuario"] += 1
    else:
      print('Você perdeu!')
      self.placar["computador"] += 1

  # def melhor_de_3(self):

  def mostrar_placar(self):
    print('Placar:')
    for jogador, pontos in self.placar.items():
      print(jogador, "-", pontos)
    print()
