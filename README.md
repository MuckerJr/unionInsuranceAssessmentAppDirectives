# UnionInsuranceAssessmentAppDirectives

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.4.

# Change Colour On Hover Directive

This project demonstrates an Angular directive that changes the colour of an element when the mouse hovers over it.

## Setup Instructions

1. Clone the repository to your local machine using `git clone <repository-url>`.
2. Navigate to the project directory using `cd <project-directory>`.
3. Install the project dependencies using `npm install`.
4. Start the development server using `ng serve`.

## Usage

The `ChangeColourOnHoverDirective` uses the `Renderer2` service to manipulate the `color` style of the host element. When the directive is initialized (`ngOnInit`), it sets the color of the element to `defaultColour`. When the mouse enters the element (`mouseenter` event), it changes the color to `hoverColour`. When the mouse leaves the element (`mouseleave` event), it changes the color back to `defaultColour`. When the directive is destroyed (`ngOnDestroy`), it removes the `color` style from the element.

The `@Input` decorators are used to bind the `defaultColour` and `hoverColour` properties of the directive to attributes of the host element. This allows you to customize the colors by setting these attributes in your HTML templates.

```html
<h2 appChangeColourOnHover defaultColour="black" hoverColour="red">Hover over me!</h2> 
```

In this example, the text color of the h2 element will be black by default, and will change to red when the mouse hovers over it.

The `DraggableElementDirective` is an Angular directive that makes an HTML element draggable. It can be applied to any HTML element by adding the `appDraggableElement` attribute.

## Usage

```html
<div appDraggableElement>Drag me around!</div>
```

In this example, the div element can be dragged around the screen by clicking and holding the mouse button down on the element, and then moving the mouse.

## How It Works
The directive uses the HTML5 Drag and Drop API to implement the dragging functionality. When the user starts dragging the element (dragstart event), the directive records the initial position of the mouse cursor. When the user stops dragging the element (dragend event), the directive calculates the new position of the element based on the final position of the mouse cursor.

The @HostBinding decorators are used to bind the draggable, position, top, and left properties of the element to properties of the directive. This allows the directive to control the draggable behavior and position of the element.

## Running Tests

Currently, this project includes a basic set of unit tests for the ChangeColourOnHoverDirective. Due to time constraints, comprehensive testing has not been implemented. Future updates to this project will aim to include more extensive unit tests, as well as end-to-end tests.

To run the existing unit tests, use the ng test command.