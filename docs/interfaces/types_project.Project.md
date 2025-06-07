[developer-portfolio - v0.1.0](../README.md) / [Modules](../modules.md) / [types/project](../modules/types_project.md) / Project

# Interface: Project

[types/project](../modules/types_project.md).Project

Represents a project in the portfolio.

This interface defines the structure for project data
displayed throughout the portfolio website, including
project details, links, and media assets.

 Project

**`Since`**

1.0.0

## Table of contents

### Properties

- [id](types_project.Project.md#id)
- [name](types_project.Project.md#name)
- [tools](types_project.Project.md#tools)
- [role](types_project.Project.md#role)
- [description](types_project.Project.md#description)
- [code](types_project.Project.md#code)
- [backend\_code](types_project.Project.md#backend_code)
- [frontend\_code](types_project.Project.md#frontend_code)
- [demo](types_project.Project.md#demo)
- [image](types_project.Project.md#image)

## Properties

### id

• **id**: `number`

Unique identifier for the project

#### Defined in

types/project.ts:13

___

### name

• **name**: `string`

Display name of the project

#### Defined in

types/project.ts:16

___

### tools

• **tools**: `string`[]

Array of technologies, frameworks, and tools used in the project

#### Defined in

types/project.ts:19

___

### role

• **role**: `string`

The role or position held during the project

#### Defined in

types/project.ts:22

___

### description

• **description**: `string`

Detailed description of the project, its goals, and outcomes

#### Defined in

types/project.ts:25

___

### code

• `Optional` **code**: `string`

Optional link to the main project code repository

#### Defined in

types/project.ts:28

___

### backend\_code

• `Optional` **backend\_code**: `string`

Optional link to the backend code repository if separate from main code

#### Defined in

types/project.ts:31

___

### frontend\_code

• `Optional` **frontend\_code**: `string`

Optional link to the frontend code repository if separate from main code

#### Defined in

types/project.ts:34

___

### demo

• `Optional` **demo**: `string`

Optional link to live demo or deployed version of the project

#### Defined in

types/project.ts:37

___

### image

• `Optional` **image**: `any`

Optional project image or screenshot for visual representation

#### Defined in

types/project.ts:40
