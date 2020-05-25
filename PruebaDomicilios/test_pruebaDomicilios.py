from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
import time

driver = webdriver.Chrome(ChromeDriverManager().install())
time.sleep(5)

driver.get('http://localhost:8100/home')
time.sleep(10)


def test_agregarDomicilio1():
    direccion = driver.find_element_by_id("in-direccion")
    direccion = direccion.find_element_by_class_name("native-input")
    articulo = driver.find_element_by_id("in-articulo")
    articulo = articulo.find_element_by_class_name("native-input")
    boton = driver.find_element_by_id("addDomicilio")
    direccion.send_keys("calle 56a #10-21")
    articulo.send_keys("arroz chino")
    boton.click()

    domicilio = driver.find_element_by_id("para-calle 56a #10-21")
    time.sleep(5)
    assert 'pendiente' in domicilio.text


def test_agregarDomicilio2():
    direccion = driver.find_element_by_id("in-direccion")
    direccion = direccion.find_element_by_class_name("native-input")
    articulo = driver.find_element_by_id("in-articulo")
    articulo = articulo.find_element_by_class_name("native-input")
    boton = driver.find_element_by_id("addDomicilio")
    direccion.send_keys("calle 56a #10-21 apt1")
    articulo.send_keys("arroz chino")
    boton.click()

    domicilio = driver.find_element_by_id("para-calle 56a #10-21 apt1")

    assert 'pendiente' in domicilio.text


def test_eliminarDomicilio():
    domicilio = driver.find_element_by_id("para-calle 56a #10-21 apt1")

    time.sleep(5)
    try:
        eliminar = driver.find_element_by_id("eliminar-calle 56a #10-21 apt1")

        eliminar.click()
    except:
        assert True
    domicilios = driver.find_element_by_id("listaDeDomicilios")

    assert 'calle 56a #10-21 apt1' not in domicilios.text


def test_entregarDomicilio():
    domicilio = driver.find_element_by_id("para-calle 56a #10-21")

    time.sleep(5)
    entregar = driver.find_element_by_id("entregar-calle 56a #10-21")
    entregar.click()
    domicilio = driver.find_element_by_id("para-calle 56a #10-21")
    assert 'entregado' in domicilio.text


def test_eliminarDomicilioEntregado():
    domicilio = driver.find_element_by_id("para-calle 56a #10-21")

    time.sleep(5)
    try:
        eliminar = driver.find_element_by_id("eliminar-calle 56a #10-21")

        eliminar.click()
    except:
        assert True
    domicilios = driver.find_element_by_id("listaDeDomicilios")

    assert 'calle 56a #10-21' in domicilios.text


def test_pagarDomicilio():
    domicilio = driver.find_element_by_id("para-calle 56a #10-21")

    time.sleep(5)
    pagar = driver.find_element_by_id("pagar-calle 56a #10-21")
    pagar.click()
    domicilio = driver.find_element_by_id("para-calle 56a #10-21")
    assert 'pagado' in domicilio.text
