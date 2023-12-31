import os
import glob

# CONSTANTES
TO_REPLACEURL = "http://146.190.196.137:2368"
TO_BEREPLACEDURL = "<G5HOME>" # Reemplazamos el localhost con la nueva IP para Ghost 5. Para Ghost 3, modificamos estos parámetros por el puerto 3001
KRAKEN_FEATURES_ROUTE = "./W5/features/Originales W5/*.feature"
CYPRESS_TESTS_ROUTE = "./W5/cypress/e2e/ghost-tests/backup/*.js" # Ruta de los archivos de la semana 5

def main():
    def kraken_files():
        feature_files = glob.glob(KRAKEN_FEATURES_ROUTE) # Retornar la lista de archivos en la carpeta de backup
        for file in feature_files:
            with open(file, 'r') as f:
                file_data = f.read() # Lee el contenido de los archivos
            file_data = file_data.split('\n')        
            file_name = file.split('\\')[1].split('.feature')[0]
            new_file = ""
            count = 0    
            for index, line in enumerate(file_data):
                linea = line.lstrip().split(' ')[0]
                if TO_BEREPLACEDURL in line:
                    line = line.replace(TO_BEREPLACEDURL, TO_REPLACEURL)
                new_file += line+'\n'
                # if linea in ['Given', 'And', 'When', 'Then']: # El código detecta en el feature estas líneas para introducir justo después la opción de tomar un pantallazo              
                #     new_file += f'  And I take a screenshot with the name "Ghost5\{file_name} - {count}"\n'
                #     count += 1            
            with open(f"./W5/features/Ghost5/{file_name}.feature", 'w') as fw:
                fw.write(new_file) # Escribir el nuevo archivo en la ruta principal
    
    def cypress_files():
        test_files = glob.glob(CYPRESS_TESTS_ROUTE)
        for file in test_files:
            with open(file, 'r') as f:
                file_data = f.read()
            file_data = file_data.split('\n')
            file_name = file.split('\\')[1].split('.cy.js')[0]
            new_file = ""
            count = 0
            for index, line in enumerate(file_data):
                if TO_BEREPLACEDURL in line:
                    line = line.replace(TO_BEREPLACEDURL, TO_REPLACEURL)
                new_file += line+'\n' # Para Cypress, la clave es detectar las acciones críticas, como get, visit, click y wait. En nuestro código no usamos otras
                # if 'cy.get' in line:
                #     new_file += f'    cy.screenshot("{file_name} - {count} - Ghost5")\n'
                #     count += 1 
                # elif 'cy.visit' in line:
                #     new_file += f'    cy.screenshot("{file_name} - {count} - Ghost5")\n'
                #     count += 1 
                # elif 'cy.click' in line:
                #     new_file += f'    cy.screenshot("{file_name} - {count} - Ghost5")\n'
                #     count += 1
                # elif 'cy.wait' in line:
                #     new_file += f'    cy.screenshot("{file_name} - {count} - Ghost5")\n'
                #     count += 1
                with open(f"./W5/cypress/e2e/ghost-tests/{file_name}.cy.js", 'w') as fw:
                    fw.write(new_file) # Escribir el nuevo archivo en la ruta principal
    
    kraken_files()
    cypress_files()

if __name__ == '__main__':
    main()