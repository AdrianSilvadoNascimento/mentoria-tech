using System;
using Interfaces;

namespace Classes
{
    class Passarinho : Animal, IAnimal, IVoa
    {
        public void FazerBarulho()
        {
            Console.WriteLine("Cantando");
        }

        public void Voar()
        {
            Console.WriteLine("Voando");
        }
    }
}
