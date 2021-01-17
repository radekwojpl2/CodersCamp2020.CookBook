# CodersCamp2020.CookBook

Funkcjonalności

        1. Menu z globalnym wyszukaniem receptury na danie -> Search Recipes
        2. Strona główna z przykładowymi daniami, około 7, jakiś domyślny filter(np. pasta), możliwość zmiany filtra na coś innego (user imput) -> Search Recipes by Ingredients
        3. Strona z randomowym daniem, przycisk na pobranie nowego oraz przycisk na pobieranie nowego dania cały czas interwał co 10s -> Get Random Recipes
        4. Gra w ile wartości odżywczych jest w danym produkcie, możliwość błędu +- jakaś wartość -> Guess Nutrition by Dish Name lub Quick Answer
        6. Lista zakupów, po wyjściu ze strony nie musi to być nigdzie zapisane, ewntualnie sesja, ciasteczka -> Search Grocery Products
        7. Kalkulator na przeliczanie miar gramy na kilogramy i takie tam. -> Convert Amounts

### Przykładowe uzycia api

1.  Search Recipes  
     a. https://api.spoonacular.com/recipes/complexSearch&apiKey=YOUR_API_KEY <-- To jest pusty template, do którego trzeba dodać co najmniej jeden parametr (bez parametrów nie działa).

          b. W celu dodania parametru trzeba po 'complexSearch' wpisać '?', a następnie nazwę danego parametru i jego wartość po '='.

    https://api.spoonacular.com/recipes/complexSearch?query=rice&apiKey=YOUR_API_KEY <-- To zapytanie do API zwróci maksymalnie 10 obiektów, które w parametrze 'query' mają słowo 'rice'.

    c. W celu dodania kilku parametrów trzeba przed każdym nowym parametrem wpisać '&'
    https://api.spoonacular.com/recipes/complexSearch?query=rice&cuisine=japanese&number=5&apiKey=YOUR_API_KEY <-- To zapytanie do API zwróci maksymalnie 5 obiektów, które w parametrze 'query' mają słowo 'rice', w parametrze 'cuisine' słowo 'japanese', a w parametrze 'number' liczbę '5'.

    d. Cała dokumnetacja z wszytkimi parametrami znajduje się tutaj (jest ich mnóstwo) https://spoonacular.com/food-api/docs#Search-Recipes-Complex

2.  Search Recipes by Ingredients

          a. https://api.spoonacular.com/recipes/findByIngredients&apiKey=YOUR_API_KEY <-- To jest pusty template, do którego trzeba dodać co najmniej jeden parametr (bez parametrów nie działa).

          b. W celu dodania parametru trzeba po 'findByIngredients' wpisać '?', a następnie nazwę danego parametru i jego wartość po '='.

    https://api.spoonacular.com/recipes/findByIngredients?ingredients=pumpkin&apiKey=YOUR_API_KEY <-- To zapytanie do API zwróci maksymalnie 10 obiektów, które w parametrze 'ingredients' mają słowo 'pumpkin'.

    c. W celu dodania kilku parametrów trzeba przed każdym nowym parametrem wpisać '&'
    https://api.spoonacular.com/recipes/findByIngredients?ingredients=pumpkin&number=3&apiKey=YOUR_API_KEY <-- To zapytanie do API zwróci maksymalnie 3 obiekty, które w parametrze 'ingredients' mają słowo 'pumpkin', w parametrze, a w parametrze 'number' liczbę '3'.

    d. Cała dokumnetacja z wszystkimi parametrami znajduje się tutaj https://spoonacular.com/food-api/docs#Search-Recipes-by-Ingredients

3.  Get Random Recipes

          a. https://api.spoonacular.com/recipes/random&apiKey=YOUR_API_KEY <-- To jest pusty template, do którego trzeba dodać co najmniej jeden parametr (bez parametrów nie działa).

          b. W celu dodania parametru trzeba po ' random ' wpisać '?', a następnie nazwę danego parametru i jego wartość po '='.

    https://api.spoonacular.com/recipes/random?number=43&apiKey=YOUR_API_KEY <-- To zapytanie do API zwróci 43 obiekty, które w parametrze 'number' posiada wartość 43.

    c. W celu dodania kilku parametrów trzeba przed każdym nowym parametrem wpisać '&'
    https://api.spoonacular.com/recipes/random?number=2&tags=vegetarian&apiKey=YOUR_API_KEY <-- To zapytanie do API zwróci 2 obiekty, które w parametrze ‘number’ mają wartość 2, w parametrze 'tags' wartość 'vegetarian'

    d. Cała dokumentacja z wszystkimi parametrami znajduje się tutaj https://spoonacular.com/food-api/docs#Get-Random-Recipes

Guess Nutrition by Dish Name i Quick Answer należą do podpunktu 4.

4.  Guess Nutrition by Dish Name

    a. https://api.spoonacular.com/recipes/guessNutrition&apiKey=YOUR_API_KEY <-- To jest pusty template, do którego trzeba dodać co najmniej jeden parametr (bez parametrów nie działa).

    b. W celu dodania parametru trzeba po ' guessNutrition ' wpisać '?', a następnie nazwę danego parametru i jego wartość po '='. https://api.spoonacular.com/recipes/guessNutrition?title=Spaghetti+Aglio+et+Olio&apiKey=YOUR_API_KEY <-- To zapytanie do API zwróci 5 obiektów, które w parametrze 'title' posiada wartość ‘Spaghetti+Aglio+et+Olio’.

    c. Jedyny parametr jaki występuje to „title”

    d. Cała dokumentacja z wszystkimi parametrami znajduje się tutaj https://spoonacular.com/food-api/docs#Guess-Nutrition-by-Dish-Name

5.  Quick Answer

    a. https://api.spoonacular.com/recipes/quickAnswer&apiKey=YOUR_API_KEY <-- To jest pusty template, do którego trzeba dodać co najmniej jeden parametr (bez parametrów nie działa).

    b. W celu dodania parametru trzeba po ' quickAnswer' wpisać '?', a następnie nazwę danego parametru i jego wartość po '='. https://api.spoonacular.com/recipes/quickAnswer?q=How+much+vitamin+c+is+in+2+apples&apiKey=YOUR_API_KEY <-- To zapytanie do API zwróci 3 obiekty, które w parametrze 'q’ posiada wartość ‘How+much+vitamin+c+is+in+2+apples’.

    c. Jedyny parametr jaki występuje to „q”

    d. Cała dokumentacja z wszystkimi parametrami znajduje się tutaj https://spoonacular.com/food-api/docs#Quick-Answer

6.  Search Grocery Products

    a. https://api.spoonacular.com/food/products/search&apiKey=YOUR_API_KEY <-- To jest pusty template, do którego trzeba dodać co najmniej jeden parametr (bez parametrów nie działa).

    b. W celu dodania parametru trzeba po 'search' wpisać '?', a następnie nazwę danego parametru i jego wartość po '='.
    https://api.spoonacular.com/food/products/search?query=pizza&apiKey=YOUR_API_KEY <-- To zapytanie do API zwróci 8 obiektów, które w parametrze 'query’ posiada wartość ‘pizza’.

    c. W celu dodania kilku parametrów trzeba przed każdym nowym parametrem wpisać '&'
    https://api.spoonacular.com/food/products/search?query=pizza&number=2&apiKey=YOUR_API_KEY
    <-- To zapytanie do API zwróci 2 obiekty, które w parametrze ‘query’ mają wartość „pizza”, w parametrze 'number' wartość 2

    d. Cała dokumentacja z wszystkimi parametrami znajduje się tutaj https://spoonacular.com/food-api/docs#Search-Grocery-Products

7.  <- to jest 7 (github jakieś dziwne rzeczy robi) Convert Amounts

          a. https://api.spoonacular.com/recipes/convert&apiKey=YOUR_API_KEY <-- To jest pusty template, do którego trzeba dodać parametry 'ingredientName', 'sourceAmount', 'sourceUnit' i 'targetUnit' (bez parametrów nie działa).

          b. W celu dodania parametru trzeba po 'convert' wpisać '?', a następnie nazwę danego parametru. Przed każdym kolejnym parametrem należy wpisać '&'.

    https://api.spoonacular.com/recipes/convert?ingredientName=water&sourceAmount=3.5&sourceUnit=cups&targetUnit=liters&apiKey=YOUR_API_KEY <-- To zapytanie do API zwróci obiekt z przekonwertowaną jednostką.

    c. Cała dokumentacja z wszystkimi parametrami znajduje się tutaj https://spoonacular.com/food-api/docs#Convert-Amounts

### Menu z globalnym wyszukaniem receptury na danie

![menu snipped](/static/assets/img/menu.jpg)

#### Instrukcja użycia

Menu zostało stworzone w formie komponentu, z wyszystkimi elementami wygenerowanymi za pomocą JavaScript, dzięki czemu z łatwością może zostać zaimplementowane na dowolnej stronie. Wywołując go należy podać zmienną odpowiadającą aktywnej stronie dzięki czemu wygenerowane zostaną wyłącznie ścieżki do pozostałych podstron bez ścieżki aktualnej strony.
W celu wprowadzenia go na stronę internetową należy:

- zaimportować { MENU } z pliku GlobalData.js , który dostarcza informacji o podstronach aplikacji wraz z odpowiadającymi im ścieżkami;
- zaimportować { MainMenu } z pliku MainMenu.js;
- wywołać komponent MainManu wraz z adekwatną zmienną z GlobalData

##### Przykład

GlobalData.js

```
export const MENU = {
   mainPage: {name: 'Main Page', link: '/index.html'},
   randomRecipe: {name: 'Random Recipe', link: '/random.html'},
   nutritionGame: {name: 'Nutrition Game', link: '/nutritionGame.html'},
   calculator: {name: 'Calculator', link: '/calculator.html'},
   shoppingList: {name: 'Shopping List', link: '/list.html'}
}

```

Plik js danej podstrony

```
import { MENU } from './app/MainMenu.js;

MainMenu(MENU.mainPage)

```

Wygenerowane zostanie menu z pominięciem odnośnika do strony głównej.

#### Wyszukiwarka

Wyszukiwarka zadziała w momencie wprowadzenia wartości do wyszukiwania. W przypadku, gdy nic nie zostanie wprowadzone to wyświetli się tooltip z informacją o konieczności wprowadzenia tekstu. Wyniki wyszukiwania otwarte zostaną na aktywnej stronie w postaci nakładki na stronę.
Po kliknięciu w wynik wyszukiwania użytkownik zostanie przeniesiony do strony ze szczegółowymi informacjami.

##### API do pobrania wyników dla wyszukiwanego zapytania

Do pobrania danych wykorzystane zostało API: https://api.spoonacular.com/recipes/complexSearch?number=NUMBER&apiKey=YOUR_API_KEY.
API pobierane jest przy użyciu fetch(), a jego obsługa odbywa się za pomocą then() i catch().

##### Zamykanie okna z wynikami wyszukiwania

Zamykanie okna z wynikami wyszukiwania może odbyć się na dwa sposoby - kliknięcie na przycisk albo kliknięcie na backdrop znajdujący się za modalem. Aby zadziała metoda z zamknięciem wyników wyszukiwania po kliknieciu w backdrop konieczne było użycie metody stopPropagation() na elemencie modal będącym dzieckiem elementu backdrop.

##### Przekierowywanie do strony ze szczegółowymi danymi wybranego przepisu

W celu przekierowania do adekwatnej strony do każdego elementu przechowującego jeden wynik wyszukiwania został przypisany numer id tego przepisu. W momencie kliknięcia na przepis pobierane jest to id i przekazywane do linku za pomocą metody

   ```
   window.location.replace(`/CodersCamp2020.CookBook/recipe.html?id=ID_PRZEPISU`

   ```
Szczegółowe dane dla przepisu są pobierane na podstawie id pobranego z linku wygenerowanego za pomocą powyższej metody. 

   ```
   const getParams = () => {
    const param = window.location.href.slice(window.location.href.indexOf('?') +1).split('=');
    return {'id':param[1]}
   }
   ```

Do pobrania danych wykorzystane zostało API: `https://api.spoonacular.com/recipes/ID_NUMBER/information?apiKey=API_KEY` 

### Gra w zgadywanie ilości kalorii w daniu

![menu snipped](/static/assets/img/nutritionGame.jpg)

#### Opis

Gra została zbudowana z trzech osobnych kontenerów. Pierwszy zawiera instrukcję z podstawowymi wytycznymi odnośnie gry. Drugi obejmuje właściwą część, czyli pytania, które są losowo wybierane z bazy 10 przygotowanych dań. Ostatni wyświetla się po zakończeniu rozgrywki. Pokazuje ostateczną ilość punktów i umożliwia ponowne włączenie gry poprzez przeładowanie strony.

Logika gry została oparta na czterech klasach: Question, Timer, Stats oraz Game. Klasa Question odpowiada za pobieranie pytań, sprawdzanie poprawności odpowiedzi i obliczanie ilości punktów. Klasa Timer tworzy, uruchamia i zatrzymuje czasomierz. Klasa Stats zajmuje się dodawaniem punktów za poprawne odpowiedzi. Klasa Game zawiera połączenie z DOM oraz funkcje rozpoczynające kolejne etapy gry.

#### Instrukcja gry

Celem gry jest odgadnięcie, ile kalorii znajduje się w podanym daniu. Po zapoznaniu się z instrukcją gracz klika w przycisk "Start game". Przy każdym pytaniu gra wysyła zapytanie do API odnośnie ilości kalorii znajdującej się w wylosowanym daniu. Po otrzymaniu odpowiedzi pokazuje się nazwa, zdjęcie i włącza się czasomierz. Na każdą odpowiedź jest przewidziane 15 sekund. Po upływie czasu odpowiedź zostaje automatycznie uznana za niepoprawną. W grze wybierane jest 5 pytań, które są losowane z dostępnej bazy 10.

Zadaniem gracza jest oszacowanie, ile kalorii może znajdować się w daniu i wpisanie odpowiedzi w odpowiednie pole. Dopuszczalny jest margines błędu 10%. Po kliknięciu przyciku "Check answer" pojawia się poprawna odpowiedź, a zdjęcie jest podświetlane na kolor zielony lub czerwony w zależności od tego, czy odpowiedź była poprawna. Jeśli gracz odpowiedział dobrze, naliczane są punkty. Ich ilość zależy od tego, jak blisko od poprawnej odpowiedzi była odpowiedź podana przez gracza. W każdej rundzie można zdobyć maksymalnie 100 punktów.

##### API do pobrania wyników dla wyszukiwanego zapytania

Do pobrania danych wykorzystane zostało API: `https://api.spoonacular.com/recipes/guessNutrition&apiKey=YOUR_API_KEY`
API pobierane jest przy użyciu fetch(), a jego obsługa odbywa się za pomocą then() i catch().