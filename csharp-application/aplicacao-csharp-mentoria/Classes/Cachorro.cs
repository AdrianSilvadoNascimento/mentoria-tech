using System;
using Interfaces;

namespace Classes
{
    class Cachorro : Animal, IAnimal
    {

        public void FazerBarulho()
        {
            Console.WriteLine("Uivando");
        }
        public void Uivar()
        {
        Console.WriteLine(Name + " está uivando");
        }

        public override void Nadar()
        {
        Console.WriteLine(Name + " não sabe nadar");
        }
    }
}