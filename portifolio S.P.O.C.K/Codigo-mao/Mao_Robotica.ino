//inclusão da biblioteca para servo motores
#include <Servo.h>
 
//declaração objetos servo
Servo Indicador;
Servo Medio;
Servo Anelar;
Servo Dedinho;
Servo Dedao;

//Pinos onde estão conectados os potenciômetros
int Pot_Dedao = A5;
int Pot_Indicador = A4;
int Pot_Medio = A3;
int Pot_Anelar = A2;
int Pot_Dedinho = A1;

//variáveis para controle dos potenciômetros
int Val_Indicador;
int Val_Medio;
int Val_Anelar;
int Val_Dedinho;
int Val_Dedao;

void setup(){
  //definição portas dos servo motores
  Serial.begin(9600);
  Dedao.attach(6);
  Indicador.attach(5);
  Medio.attach(4);
  Anelar.attach(3);
  Dedinho.attach(2);
 

  pinMode(Pot_Indicador, INPUT);
}  
void loop(){
  
  Serial.println(Val_Indicador);
  Val_Indicador = analogRead(Pot_Indicador);
  Val_Indicador = map(Val_Indicador, 0, 1023, 175, 0);
  Indicador.write(Val_Indicador);
	
  Serial.println(Val_Medio);
  Val_Medio = analogRead(Pot_Medio);
  Val_Medio = map(Val_Medio, 0, 1023, 0, 175);
  Medio.write(Val_Medio);
  
  Serial.println(Val_Anelar);
  Val_Anelar = analogRead(Pot_Anelar);
  Val_Anelar = map(Val_Anelar, 0, 1023, 175, 0);
  Anelar.write(Val_Anelar);
  
  Serial.println(Val_Dedinho);
  Val_Dedinho = analogRead(Pot_Dedinho);
  Val_Dedinho = map(Val_Dedinho, 0, 1023, 175, 0);
  Dedinho.write(Val_Dedinho);
  
  Serial.println(Val_Dedao);
  Val_Dedao = analogRead(Pot_Dedao);
  Val_Dedao = map(Val_Dedao, 0, 1023, 175, 0);
  Dedao.write(Val_Dedao);

}
    