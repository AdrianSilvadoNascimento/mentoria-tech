using System;

namespace Classes
{
    class Circulo : Forma
    {
        private double pi = 3.14f;
        public double Raio { get; set; }
        public override double calcularArea()
        {
            return  pi * Raio * Raio;
        }
    }
}