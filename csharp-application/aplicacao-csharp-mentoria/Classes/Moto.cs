using System;

namespace Classes
{
    class Moto : Veiculo
    {
        public void LigarMotor()
        {
            Console.WriteLine("Ligando o motor da moto.");
        }

        public override void Dirigir()
        {
            Console.WriteLine("Pilotando a moto.");
        }
    }
}
