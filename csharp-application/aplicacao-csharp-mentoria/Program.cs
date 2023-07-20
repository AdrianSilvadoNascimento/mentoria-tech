// See https://aka.ms/new-console-template for more information
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Classes;

namespace SoloLearn
{
	class Program
	{
		static void Main(string[] args)
		{

         Console.WriteLine(calcularFatorial(5));
         int calcularFatorial(int n) {
            if (n == 0)
            {
               return 1;
            }
            else
            {
               return n * calcularFatorial(n - 1);
            }
         }

      // Animal animal = new Animal();
      // Cachorro cachorro = new Cachorro();
      // animal.Name = "Animal";
      // animal.Nadar();

      // cachorro.Name = "Rufus";
      // cachorro.Nadar();

      // Retangulo retangulo = new Retangulo();
      // retangulo.Largura = 5;
      // retangulo.Altura = 3;
      // double retanguloArea = retangulo.calcularArea();
      // Console.WriteLine(retanguloArea);

      // Circulo circulo = new Circulo();
      // circulo.Raio = 2.5;
      // double circuloArea = circulo.calcularArea();
      // Console.WriteLine(circuloArea);

      // Carro carro = new Carro();
      // carro.Marca = "Fiat";
      // carro.Modelo = "Palio";
      // carro.Ano = 2020;
      // carro.AbrirPorta();
      // carro.Dirigir();

      // Moto moto = new Moto();
      // moto.Marca = "Honda";
      // moto.Modelo = "CG";
      // moto.Ano = 2021;
      // moto.LigarMotor();
      // moto.Dirigir();

      
      // // Criando uma lista de números.
      // List<int> numeros = new List<int>();
      // numeros.Add(12);
      // numeros.Add(13);
      // numeros.Add(14);
      // numeros.Add(15);
      // numeros.Add(16);
      // numeros.Add(17);
      // numeros.Add(18);
      // Console.WriteLine(numeros[6]);
      // Console.WriteLine(numeros.Count());

      // // Demonstrando como utilizar um loop for no C# para percorrer a lista de números.
      // for (int index = 0; index < numeros.Count(); index++)
      // {
      //   if (numeros[index] == 15)
      //   {
      //     Console.WriteLine(numeros[index]);
      //   }
      // }

      // // Definindo uma lista de nomes.
      // List<string> names = new List<string> { "Alice", "Bob", "Charlie", "David" };

      // // Demonstrando como utilizar a função Count() para saber o tamanho da lista.
      // Console.WriteLine("Tamanho da lista: " + names.Count());

      // // Exemplo de como acessar os valores da lista separadamente, através do índice.
      // Console.WriteLine(names[0]);
      // Console.WriteLine(names[1]);
      // Console.WriteLine(names[2]);
      // Console.WriteLine(names[3]);


      // // Exemplo de como podemos utilizar o tamanho da lista e subtrair algum valor para
      // // coletar valores ao final da lista.
      // Console.WriteLine(names[names.Count() - 1]);
      // Console.WriteLine(names[names.Count() - 2]);

      // // Exemplo de como podemos utilizar o loop for para nos auxiliar com os índices.
      // for (int i = 0; i < names.Count(); i++)
      // {
      //   if (names.Contains("Adrian"))
      //   {
      //     Console.WriteLine(names[i]);
      //   }

      //   if (names.Contains("Adrian") && names[i] == "Adrian")
      //   {
      //     Console.WriteLine(names[i]);
      //   }
      // }

      // // Como podemos acessar o valor em uma List<T> através do elemento, sem utilizar o índice.
      // foreach (string name in names)
      // {
      //   if (name == "Adrian")
      //   {
      //     Console.WriteLine(name);
      //   }
      // }

      // Console.WriteLine("Digite o seu nome");

      // // Resgatando valor do nome do usuário.
      // string nome = Console.ReadLine();

      // Console.WriteLine("Digite o seu sobrenome");

      // // Resgatando valor do sobrenome do usuário.
      // string sobrenome = Console.ReadLine();

      // Console.WriteLine("Digite a sua idade");

      // // Resgatando valor da idade do usuário.
      // string idade = Console.ReadLine();
      
      // Console.WriteLine("Digite a sua altura");

      // // Resgatando valor da altura do usuário.
      // string altura = Console.ReadLine();

      // // Criando uma lista ordenada com valores pares.
      // // Com isso, é possível armazenar um valor, utilizando uma chave de acesso.
      // SortedList<string, string> lista = new SortedList<string, string>();
      // lista.Add("nome", nome);
      // lista.Add("sobrenome", sobrenome);
      // lista.Add("idade", idade);
      // lista.Add("altura", altura);

      // // Utilizando um IEnumerator<KeyValuePair<string, string> juntamente com um loop while
      // // para pegar os valores através do enumerador dos pares em questão.
      // IEnumerator<KeyValuePair<string, string>> enumerator = lista.GetEnumerator();

      // while (enumerator.MoveNext())
      // {
      //   string key = enumerator.Current.Key;
      //   string value = enumerator.Current.Value;

      //   Console.WriteLine(key + " " + value);
      // }

      // // Utilizando um KeyValuePair<string, string> para acessar os valores da chave
      // // e o valor do par em questão.
      // foreach (KeyValuePair<string, string> par in lista)
      // {
      //   string key = par.Key;
      //   string value = par.Value;

      //   string result = key + " é: " + value + " e está armazenado em: " + key;
      //   Console.WriteLine(result);
      // }
		}
	}
}

