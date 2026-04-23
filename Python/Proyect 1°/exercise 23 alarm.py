
import time
import datetime
import pygame

def set_alarm(alarm_time):
    print(f"Alarm set for {alarm_time}")
    sound_file = "librery/sounds/freesound_community-alarm-clock-90867.mp3"
    is_running = True

    while is_running:
        current_time = datetime.datetime.now().strftime("%H:%M:%S")# tomamos la hora actual de nuestro dispositivo y lo guardamos en la variable
        print(current_time)
        time.sleep(1)
        if current_time == alarm_time:
            print("Wake Up! 😣")
            pygame.mixer.init()#inicializa el mixer, se pueden tocar atributos como la frecuencia, etc
            pygame.mixer.music.load(sound_file) #elegimos el audio que se escuchara
            pygame.mixer.music.play()#reproduce el audio

            while pygame.mixer.music.get_busy():# de esta manera evitamos que el audio se corte pasado 1 segundo //problema es que el audio se reproducira 1 sola vez y el programa terminara. 
                time.sleep(1)
            is_running = False

if __name__ == "__main__":
    alarm_time = input("Enter the alarm time (HH:MM:SS): ")#ingresa el horario en modo militar
    set_alarm(alarm_time)