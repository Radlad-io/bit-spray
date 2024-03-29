from time import sleep
import network
# from .debounce import Debounce
# from umqtt.simple import MQTTClient

class Network:
    
    def __init__(self, SSID, PWD):
       self.SSID = SSID
       self.PWD = PWD
#        self.mqtt_client = MQTTClient(
#             client_id = mqtt_client_id,
#             server = mqtt_host,
#             user = mqtt_username,
#             password = mqtt_password)
       
    def wifi_connect(self):
        wlan = network.WLAN(network.STA_IF)
        wlan.active(True)
        wlan.connect(self.SSID, self.PWD)
        while wlan.isconnected() == False:
            print('Waiting for connection...')
            sleep(1)
        IP = wlan.ifconfig()[0]
        print(f'Connected to: {self.SSID}', '\n', f'{IP}')
        return IP
    
#     def mqtt_connect(self):
#         self.mqtt_client.connect()
#         
#     def mqtt_send(self, MQTT_PUBLISH_TOPIC, MSG):
#         
# #         self.mqtt_client.disconnect()
#         try:
#             self.mqtt_client.publish(MQTT_PUBLISH_TOPIC, f'{MSG}')
#         except Exception as e:
#             print(f'Failed to publish message: {e}')
# #         finally:
#             
