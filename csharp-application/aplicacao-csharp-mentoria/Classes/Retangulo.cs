using System;

namespace Classes
{
    class Retangulo : Forma
    {
        public double Largura { get; set; }
        public double Altura { get; set; }

        public override double calcularArea()
        {
            return Largura * Altura;
        }
    }
}