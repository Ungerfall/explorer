import xml.etree.ElementTree as ET


def parse(files):
  js = open('ip.js', 'w')
  print('let interestingPoints = [', file=js)
  id = 0
  for file in files:
    root = ET.parse(file).getroot()
    for type_tag in root.findall('node'):
        lat = type_tag.get('lat')
        lon = type_tag.get('lon')
        popup_name = None
        bad_place = False
        for tag in type_tag.findall('tag'):
          if tag.get('k') == "name":
            popup_name = tag.get('v')
          if tag.get('k') == "attraction":
            if tag.get('v') == "animal" or tag.get('v') == "amusement_ride":
              bad_place = True
        if popup_name is None:
          popup_name = 'Интересный объект'
        if not bad_place:
          print("{{ id: {3}, lat: {0}, lon: {1}, popup: \'{2}\', markerRef: null }},".format(lat, lon, popup_name, id), file=js)
          id += 1
  
  print('];', file=js)

parse(['historic.xml', 'tourism.xml'])
