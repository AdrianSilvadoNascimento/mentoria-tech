using System;

namespace Classes
{
    class Produto
    {
        public string Nome { get; set; }
        public string Preco { get; set; }

        public virtual void MostrarDetalhes()
        {
            Console.WriteLine("Nome do Produto: " + Nome);
            Console.WriteLine("Valor do Produto: " + Preco);
        }
    }
}