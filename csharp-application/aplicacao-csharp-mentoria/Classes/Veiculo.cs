using System;

namespace Classes
{
    class Veiculo
    {
        public string Marca { get; set; }
        public string Modelo { get; set; }
        public int Ano { get; set; }

        public virtual void Dirigir()
        {
            Console.WriteLine("Dirigindo o veículo.");
        }
    }
}