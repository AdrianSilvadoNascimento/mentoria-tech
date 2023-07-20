using System;

namespace Classes
{
    class Veiculo
    {
        public required string Marca { get; set; }
        public required string Modelo { get; set; }
        public int Ano { get; set; }

        public virtual void Dirigir()
        {
            Console.WriteLine("Dirigindo o veículo.");
        }
    }
}