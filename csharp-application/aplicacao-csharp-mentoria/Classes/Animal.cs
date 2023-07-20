using System;

namespace Classes
{
  class Animal
  {
    public required string Name { get; set; }

    public void Comer()
    {
      Console.WriteLine(Name + " está comendo");
    }

    public virtual void Nadar()
    {
      Console.WriteLine(Name + " está nadando");
    }
  }
}