using System;

namespace Classes
{
    class Carro : Veiculo
    {
        public void AbrirPorta()
        {
            Console.WriteLine("Abrindo a porta do carro.");
        }

        public override void Dirigir()
        {
            Console.WriteLine("Dirigindo o carro.");
        }
    }
}