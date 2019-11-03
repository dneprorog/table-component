## table-component-maksym-prykhodko

## Установка
Вам нужно установить table-component-maksym-prykhodko с помощью npm:

npm i table-component-maksym-prykhodko


## Описание
table-component-maksym-prykhodko - это react component который представляет из себя таблицу с возможностью удаления/добавление рядов таблицы и редактирования ячеек.


### Props for table-component-maksym-prykhodko
````
<Table
   onProductTableUpdate={(e) => {e - стандартное браузерное событие}}
   onRowAdd={() => {...}}
   onRowDel={() => {...}}
   products={[{
        id,
        name,
        price,
        category,
        quantity
   }, ...]}
   disableButton={boolean}
   deleteRow={() => {...}}
   addRow={() => {...}}
   changeCell={() => {...}}
/>



### API
onProductTableUpdate - тип function: позволяет редактировать ячейки таблицы.

onRowAdd - тип function: позволяет добавить строку таблицы.

onRowAdd - тип function: позволяет удалить строку таблицы.

products - тип array: список данных на основании которых строится таблица, где элемент массива является строкой таблицы(object), каждое свойство object является названием колонки.

deleteRow - тип function: callback который вызывается после удаления строки.

addRow - тип function: callback который вызывается после добавления строки.

changeCell - тип function: callback который вызывается после редактирования ячейки таблицы.
