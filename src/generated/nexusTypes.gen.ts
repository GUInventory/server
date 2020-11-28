/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */

import * as PrismaClient from ".prisma/client"
import { core } from "@nexus/schema"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    dateTime<FieldName extends string>(fieldName: FieldName, opts?: core.ScalarInputFieldConfig<core.GetGen3<"inputTypes", TypeName, FieldName>>): void // "Date";
    json<FieldName extends string>(fieldName: FieldName, opts?: core.ScalarInputFieldConfig<core.GetGen3<"inputTypes", TypeName, FieldName>>): void // "JSON";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    dateTime<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "Date";
    json<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "JSON";
  }
}
declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    model: NexusPrisma<TypeName, 'model'>
    crud: any
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  ChangePasswordInput: { // input type
    newPassword: string; // String!
    oldPassword: string; // String!
  }
  ConnectOrDisconnectRelation: { // input type
    connect?: NexusGenInputs['ConnectRelation'] | null; // ConnectRelation
    disconnect?: NexusGenInputs['ConnectRelation'] | null; // ConnectRelation
  }
  ConnectRelation: { // input type
    id: number; // Int!
  }
  CreateCategoryInput: { // input type
    color: string; // String!
    name: string; // String!
    parent?: NexusGenInputs['ConnectRelation'] | null; // ConnectRelation
  }
  CreateItemInput: { // input type
    image: string; // String!
    name: string; // String!
    positionX?: number | null; // Int
    positionY?: number | null; // Int
    positionZ?: number | null; // Int
    sizeX: number; // Int!
    sizeY: number; // Int!
    sizeZ: number; // Int!
    storage: NexusGenInputs['ConnectRelation']; // ConnectRelation!
    value: number; // Int!
  }
  CreateOutgoingInput: { // input type
    description: string; // String!
    item: NexusGenInputs['ConnectRelation']; // ConnectRelation!
    value: number; // Int!
  }
  CreateRoleInput: { // input type
    roleType: NexusGenEnums['RoleTypeEnum']; // RoleTypeEnum!
    user: NexusGenInputs['ConnectRelation']; // ConnectRelation!
    warehouse: NexusGenInputs['ConnectRelation']; // ConnectRelation!
  }
  CreateStorageInput: { // input type
    name: string; // String!
    positionX: number; // Int!
    positionY: number; // Int!
    sizeX: number; // Int!
    sizeY: number; // Int!
    sizeZ: number; // Int!
    warehouse: NexusGenInputs['ConnectRelation']; // ConnectRelation!
  }
  CreateWarehouseInput: { // input type
    name: string; // String!
    sizeX: number; // Int!
    sizeY: number; // Int!
    sizeZ: number; // Int!
  }
  ForgotPasswordInput: { // input type
    email: string; // String!
  }
  LoginInput: { // input type
    email: string; // String!
    password: string; // String!
  }
  RegisterInput: { // input type
    email: string; // String!
    name: string; // String!
    password: string; // String!
  }
  ResetPasswordInput: { // input type
    password: string; // String!
    token: string; // String!
  }
  UpdateCategoryInput: { // input type
    color?: string | null; // String
    name?: string | null; // String
  }
  UpdateItemInput: { // input type
    image?: string | null; // String
    name?: string | null; // String
    positionX?: number | null; // Int
    positionY?: number | null; // Int
    positionZ?: number | null; // Int
    sizeX?: number | null; // Int
    sizeY?: number | null; // Int
    sizeZ?: number | null; // Int
    storage?: NexusGenInputs['ConnectOrDisconnectRelation'] | null; // ConnectOrDisconnectRelation
    value?: number | null; // Int
  }
  UpdateOutgoingInput: { // input type
    description?: string | null; // String
    item?: NexusGenInputs['ConnectOrDisconnectRelation'] | null; // ConnectOrDisconnectRelation
    value?: number | null; // Int
  }
  UpdateRoleInput: { // input type
    roleType?: NexusGenEnums['RoleTypeEnum'] | null; // RoleTypeEnum
  }
  UpdateStorageInput: { // input type
    name?: string | null; // String
    positionX?: number | null; // Int
    positionY?: number | null; // Int
    sizeX?: number | null; // Int
    sizeY?: number | null; // Int
    sizeZ?: number | null; // Int
    warehouse?: NexusGenInputs['ConnectOrDisconnectRelation'] | null; // ConnectOrDisconnectRelation
  }
  UpdateUserInput: { // input type
    email?: string | null; // String
    globalRole?: NexusGenEnums['RoleTypeEnum'] | null; // RoleTypeEnum
    name?: string | null; // String
  }
  UpdateWarehouseInput: { // input type
    name?: string | null; // String
    sizeX?: number | null; // Int
    sizeY?: number | null; // Int
    sizeZ?: number | null; // Int
  }
}

export interface NexusGenEnums {
  AttributeTypeEnum: PrismaClient.AttributeTypeEnum
  LogTypeEnum: "CREATE" | "DELETE" | "UPDATE"
  RoleTypeEnum: "ADMIN" | "EDITOR" | "USER"
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  Date: any
  JSON: any
}

export interface NexusGenRootTypes {
  Attribute: PrismaClient.Attribute;
  AttributeType: PrismaClient.AttributeType;
  AuthenticationPayload: { // root type
    token?: string | null; // String
    user?: NexusGenRootTypes['User'] | null; // User
  }
  Category: PrismaClient.Category;
  Item: PrismaClient.Item;
  Log: PrismaClient.Log;
  Mutation: {};
  Outgoing: PrismaClient.Outgoing;
  Position2D: { // root type
    x?: number | null; // Int
    y?: number | null; // Int
  }
  Position3D: { // root type
    x?: number | null; // Int
    y?: number | null; // Int
    z?: number | null; // Int
  }
  Query: {};
  ResetPasswordToken: PrismaClient.ResetPasswordToken;
  Role: PrismaClient.Role;
  Size: { // root type
    x?: number | null; // Int
    y?: number | null; // Int
    z?: number | null; // Int
  }
  Storage: PrismaClient.Storage;
  Subscription: { // root type
    itemCreated?: NexusGenRootTypes['Item'] | null; // Item
    itemDeleted?: NexusGenRootTypes['Item'] | null; // Item
    itemUpdated?: NexusGenRootTypes['Item'] | null; // Item
  }
  User: PrismaClient.User;
  Warehouse: PrismaClient.Warehouse;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  ChangePasswordInput: NexusGenInputs['ChangePasswordInput'];
  ConnectOrDisconnectRelation: NexusGenInputs['ConnectOrDisconnectRelation'];
  ConnectRelation: NexusGenInputs['ConnectRelation'];
  CreateCategoryInput: NexusGenInputs['CreateCategoryInput'];
  CreateItemInput: NexusGenInputs['CreateItemInput'];
  CreateOutgoingInput: NexusGenInputs['CreateOutgoingInput'];
  CreateRoleInput: NexusGenInputs['CreateRoleInput'];
  CreateStorageInput: NexusGenInputs['CreateStorageInput'];
  CreateWarehouseInput: NexusGenInputs['CreateWarehouseInput'];
  ForgotPasswordInput: NexusGenInputs['ForgotPasswordInput'];
  LoginInput: NexusGenInputs['LoginInput'];
  RegisterInput: NexusGenInputs['RegisterInput'];
  ResetPasswordInput: NexusGenInputs['ResetPasswordInput'];
  UpdateCategoryInput: NexusGenInputs['UpdateCategoryInput'];
  UpdateItemInput: NexusGenInputs['UpdateItemInput'];
  UpdateOutgoingInput: NexusGenInputs['UpdateOutgoingInput'];
  UpdateRoleInput: NexusGenInputs['UpdateRoleInput'];
  UpdateStorageInput: NexusGenInputs['UpdateStorageInput'];
  UpdateUserInput: NexusGenInputs['UpdateUserInput'];
  UpdateWarehouseInput: NexusGenInputs['UpdateWarehouseInput'];
  AttributeTypeEnum: NexusGenEnums['AttributeTypeEnum'];
  LogTypeEnum: NexusGenEnums['LogTypeEnum'];
  RoleTypeEnum: NexusGenEnums['RoleTypeEnum'];
  String: NexusGenScalars['String'];
  Int: NexusGenScalars['Int'];
  Float: NexusGenScalars['Float'];
  Boolean: NexusGenScalars['Boolean'];
  ID: NexusGenScalars['ID'];
  Date: NexusGenScalars['Date'];
  JSON: NexusGenScalars['JSON'];
}

export interface NexusGenFieldTypes {
  Attribute: { // field return type
    createdAt: NexusGenScalars['Date']; // Date!
    id: string | null; // ID
    item: Array<NexusGenRootTypes['Item'] | null>; // [Item]!
    type: NexusGenEnums['AttributeTypeEnum'] | null; // AttributeTypeEnum
    updatedAt: NexusGenScalars['Date']; // Date!
    value: string | null; // String
  }
  AttributeType: { // field return type
    category: Array<NexusGenRootTypes['Category'] | null>; // [Category]!
    createdAt: NexusGenScalars['Date']; // Date!
    id: string | null; // ID
    name: string | null; // String
    type: NexusGenEnums['AttributeTypeEnum'] | null; // AttributeTypeEnum
    updatedAt: NexusGenScalars['Date']; // Date!
  }
  AuthenticationPayload: { // field return type
    token: string | null; // String
    user: NexusGenRootTypes['User'] | null; // User
  }
  Category: { // field return type
    children: NexusGenRootTypes['Category'][] | null; // [Category!]
    color: string | null; // String
    createdAt: NexusGenScalars['Date']; // Date!
    id: string | null; // ID
    items: NexusGenRootTypes['Item'][] | null; // [Item!]
    name: string | null; // String
    parent: Array<NexusGenRootTypes['Category'] | null> | null; // [Category]
    updatedAt: NexusGenScalars['Date']; // Date!
  }
  Item: { // field return type
    attributes: NexusGenRootTypes['Attribute'][] | null; // [Attribute!]
    categories: NexusGenRootTypes['Category'][] | null; // [Category!]
    createdAt: NexusGenScalars['Date']; // Date!
    id: string | null; // ID
    image: string | null; // String
    logs: NexusGenRootTypes['Log'][] | null; // [Log!]
    name: string | null; // String
    outgoings: NexusGenRootTypes['Outgoing'][] | null; // [Outgoing!]
    position: NexusGenRootTypes['Position3D'] | null; // Position3D
    size: NexusGenRootTypes['Size'] | null; // Size
    storage: NexusGenRootTypes['Storage']; // Storage!
    updatedAt: NexusGenScalars['Date']; // Date!
    value: number | null; // Int
  }
  Log: { // field return type
    createdAt: NexusGenScalars['Date']; // Date!
    entityId: string | null; // String
    entityName: string | null; // String
    id: string | null; // ID
    newValues: NexusGenScalars['JSON'] | null; // JSON
    oldValues: NexusGenScalars['JSON'] | null; // JSON
    type: NexusGenEnums['LogTypeEnum'] | null; // LogTypeEnum
    user: NexusGenRootTypes['User']; // User!
    userId: number | null; // Int
  }
  Mutation: { // field return type
    changePassword: NexusGenRootTypes['User'] | null; // User
    createCategory: NexusGenRootTypes['Category'] | null; // Category
    createItem: NexusGenRootTypes['Item'] | null; // Item
    createOutgoing: NexusGenRootTypes['Outgoing'] | null; // Outgoing
    createRole: NexusGenRootTypes['Role'] | null; // Role
    createStorage: NexusGenRootTypes['Storage'] | null; // Storage
    createWarehouse: NexusGenRootTypes['Warehouse'] | null; // Warehouse
    deleteCategory: NexusGenRootTypes['Category'] | null; // Category
    deleteItem: NexusGenRootTypes['Item'] | null; // Item
    deleteOutgoing: NexusGenRootTypes['Outgoing'] | null; // Outgoing
    deleteRole: NexusGenRootTypes['Role'] | null; // Role
    deleteStorage: NexusGenRootTypes['Storage'] | null; // Storage
    deleteWarehouse: NexusGenRootTypes['Warehouse'] | null; // Warehouse
    forgotPassword: boolean | null; // Boolean
    login: NexusGenRootTypes['AuthenticationPayload'] | null; // AuthenticationPayload
    register: NexusGenRootTypes['AuthenticationPayload'] | null; // AuthenticationPayload
    resetPassword: boolean | null; // Boolean
    updateCategory: NexusGenRootTypes['Category'] | null; // Category
    updateItem: NexusGenRootTypes['Item'] | null; // Item
    updateOutgoing: NexusGenRootTypes['Outgoing'] | null; // Outgoing
    updateRole: NexusGenRootTypes['Role'] | null; // Role
    updateStorage: NexusGenRootTypes['Storage'] | null; // Storage
    updateUser: NexusGenRootTypes['User'] | null; // User
    updateWarehouse: NexusGenRootTypes['Warehouse'] | null; // Warehouse
  }
  Outgoing: { // field return type
    createdAt: NexusGenScalars['Date']; // Date!
    description: string | null; // String
    id: string | null; // ID
    item: Array<NexusGenRootTypes['Item'] | null>; // [Item]!
    updatedAt: NexusGenScalars['Date']; // Date!
    value: number | null; // Int
  }
  Position2D: { // field return type
    x: number | null; // Int
    y: number | null; // Int
  }
  Position3D: { // field return type
    x: number | null; // Int
    y: number | null; // Int
    z: number | null; // Int
  }
  Query: { // field return type
    categories: Array<NexusGenRootTypes['Category'] | null> | null; // [Category]
    category: NexusGenRootTypes['Category'] | null; // Category
    item: NexusGenRootTypes['Item'] | null; // Item
    items: Array<NexusGenRootTypes['Item'] | null> | null; // [Item]
    logs: Array<NexusGenRootTypes['Log'] | null> | null; // [Log]
    me: NexusGenRootTypes['User'] | null; // User
    myWarehouses: Array<NexusGenRootTypes['Warehouse'] | null> | null; // [Warehouse]
    outgoing: NexusGenRootTypes['Outgoing'] | null; // Outgoing
    roles: Array<NexusGenRootTypes['Role'] | null> | null; // [Role]
    storage: NexusGenRootTypes['Storage'] | null; // Storage
    users: Array<NexusGenRootTypes['User'] | null> | null; // [User]
    warehouse: NexusGenRootTypes['Warehouse'] | null; // Warehouse
    warehouses: Array<NexusGenRootTypes['Warehouse'] | null> | null; // [Warehouse]
  }
  ResetPasswordToken: { // field return type
    createdAt: NexusGenScalars['Date']; // Date!
    email: string | null; // ID
    token: string | null; // String
    updatedAt: NexusGenScalars['Date']; // Date!
  }
  Role: { // field return type
    createdAt: NexusGenScalars['Date']; // Date!
    id: string | null; // ID
    roleType: NexusGenEnums['RoleTypeEnum'] | null; // RoleTypeEnum
    updatedAt: NexusGenScalars['Date']; // Date!
    user: NexusGenRootTypes['User']; // User!
    warehouse: NexusGenRootTypes['Warehouse']; // Warehouse!
  }
  Size: { // field return type
    x: number | null; // Int
    y: number | null; // Int
    z: number | null; // Int
  }
  Storage: { // field return type
    createdAt: NexusGenScalars['Date']; // Date!
    id: string | null; // ID
    items: NexusGenRootTypes['Item'][] | null; // [Item!]
    name: string | null; // String
    position: NexusGenRootTypes['Position2D'] | null; // Position2D
    size: NexusGenRootTypes['Size'] | null; // Size
    updatedAt: NexusGenScalars['Date']; // Date!
    usage: number | null; // Int
    warehouse: NexusGenRootTypes['Warehouse']; // Warehouse!
  }
  Subscription: { // field return type
    itemCreated: NexusGenRootTypes['Item'] | null; // Item
    itemDeleted: NexusGenRootTypes['Item'] | null; // Item
    itemUpdated: NexusGenRootTypes['Item'] | null; // Item
  }
  User: { // field return type
    createdAt: NexusGenScalars['Date']; // Date!
    email: string | null; // String
    globalRole: NexusGenEnums['RoleTypeEnum'] | null; // RoleTypeEnum
    id: string | null; // ID
    name: string | null; // String
    password: string | null; // String
    roles: NexusGenRootTypes['Role'][] | null; // [Role!]
    updatedAt: NexusGenScalars['Date']; // Date!
    warehouses: NexusGenRootTypes['Warehouse'][] | null; // [Warehouse!]
  }
  Warehouse: { // field return type
    createdAt: NexusGenScalars['Date']; // Date!
    id: string | null; // ID
    name: string | null; // String
    roles: NexusGenRootTypes['Role'][] | null; // [Role!]
    size: NexusGenRootTypes['Size'] | null; // Size
    storages: NexusGenRootTypes['Storage'][] | null; // [Storage!]
    updatedAt: NexusGenScalars['Date']; // Date!
    users: NexusGenRootTypes['User'][] | null; // [User!]
  }
}

export interface NexusGenFieldTypeNames {
  Attribute: { // field return type name
    createdAt: 'Date'
    id: 'ID'
    item: 'Item'
    type: 'AttributeTypeEnum'
    updatedAt: 'Date'
    value: 'String'
  }
  AttributeType: { // field return type name
    category: 'Category'
    createdAt: 'Date'
    id: 'ID'
    name: 'String'
    type: 'AttributeTypeEnum'
    updatedAt: 'Date'
  }
  AuthenticationPayload: { // field return type name
    token: 'String'
    user: 'User'
  }
  Category: { // field return type name
    children: 'Category'
    color: 'String'
    createdAt: 'Date'
    id: 'ID'
    items: 'Item'
    name: 'String'
    parent: 'Category'
    updatedAt: 'Date'
  }
  Item: { // field return type name
    attributes: 'Attribute'
    categories: 'Category'
    createdAt: 'Date'
    id: 'ID'
    image: 'String'
    logs: 'Log'
    name: 'String'
    outgoings: 'Outgoing'
    position: 'Position3D'
    size: 'Size'
    storage: 'Storage'
    updatedAt: 'Date'
    value: 'Int'
  }
  Log: { // field return type name
    createdAt: 'Date'
    entityId: 'String'
    entityName: 'String'
    id: 'ID'
    newValues: 'JSON'
    oldValues: 'JSON'
    type: 'LogTypeEnum'
    user: 'User'
    userId: 'Int'
  }
  Mutation: { // field return type name
    changePassword: 'User'
    createCategory: 'Category'
    createItem: 'Item'
    createOutgoing: 'Outgoing'
    createRole: 'Role'
    createStorage: 'Storage'
    createWarehouse: 'Warehouse'
    deleteCategory: 'Category'
    deleteItem: 'Item'
    deleteOutgoing: 'Outgoing'
    deleteRole: 'Role'
    deleteStorage: 'Storage'
    deleteWarehouse: 'Warehouse'
    forgotPassword: 'Boolean'
    login: 'AuthenticationPayload'
    register: 'AuthenticationPayload'
    resetPassword: 'Boolean'
    updateCategory: 'Category'
    updateItem: 'Item'
    updateOutgoing: 'Outgoing'
    updateRole: 'Role'
    updateStorage: 'Storage'
    updateUser: 'User'
    updateWarehouse: 'Warehouse'
  }
  Outgoing: { // field return type name
    createdAt: 'Date'
    description: 'String'
    id: 'ID'
    item: 'Item'
    updatedAt: 'Date'
    value: 'Int'
  }
  Position2D: { // field return type name
    x: 'Int'
    y: 'Int'
  }
  Position3D: { // field return type name
    x: 'Int'
    y: 'Int'
    z: 'Int'
  }
  Query: { // field return type name
    categories: 'Category'
    category: 'Category'
    item: 'Item'
    items: 'Item'
    logs: 'Log'
    me: 'User'
    myWarehouses: 'Warehouse'
    outgoing: 'Outgoing'
    roles: 'Role'
    storage: 'Storage'
    users: 'User'
    warehouse: 'Warehouse'
    warehouses: 'Warehouse'
  }
  ResetPasswordToken: { // field return type name
    createdAt: 'Date'
    email: 'ID'
    token: 'String'
    updatedAt: 'Date'
  }
  Role: { // field return type name
    createdAt: 'Date'
    id: 'ID'
    roleType: 'RoleTypeEnum'
    updatedAt: 'Date'
    user: 'User'
    warehouse: 'Warehouse'
  }
  Size: { // field return type name
    x: 'Int'
    y: 'Int'
    z: 'Int'
  }
  Storage: { // field return type name
    createdAt: 'Date'
    id: 'ID'
    items: 'Item'
    name: 'String'
    position: 'Position2D'
    size: 'Size'
    updatedAt: 'Date'
    usage: 'Int'
    warehouse: 'Warehouse'
  }
  Subscription: { // field return type name
    itemCreated: 'Item'
    itemDeleted: 'Item'
    itemUpdated: 'Item'
  }
  User: { // field return type name
    createdAt: 'Date'
    email: 'String'
    globalRole: 'RoleTypeEnum'
    id: 'ID'
    name: 'String'
    password: 'String'
    roles: 'Role'
    updatedAt: 'Date'
    warehouses: 'Warehouse'
  }
  Warehouse: { // field return type name
    createdAt: 'Date'
    id: 'ID'
    name: 'String'
    roles: 'Role'
    size: 'Size'
    storages: 'Storage'
    updatedAt: 'Date'
    users: 'User'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    changePassword: { // args
      data: NexusGenInputs['ChangePasswordInput']; // ChangePasswordInput!
    }
    createCategory: { // args
      data: NexusGenInputs['CreateCategoryInput']; // CreateCategoryInput!
    }
    createItem: { // args
      data: NexusGenInputs['CreateItemInput']; // CreateItemInput!
    }
    createOutgoing: { // args
      data: NexusGenInputs['CreateOutgoingInput']; // CreateOutgoingInput!
    }
    createRole: { // args
      data: NexusGenInputs['CreateRoleInput']; // CreateRoleInput!
    }
    createStorage: { // args
      data: NexusGenInputs['CreateStorageInput']; // CreateStorageInput!
    }
    createWarehouse: { // args
      data: NexusGenInputs['CreateWarehouseInput']; // CreateWarehouseInput!
    }
    deleteCategory: { // args
      id: number; // Int!
    }
    deleteItem: { // args
      id: number; // Int!
    }
    deleteOutgoing: { // args
      id: number; // Int!
    }
    deleteRole: { // args
      id: number; // Int!
    }
    deleteStorage: { // args
      id: number; // Int!
    }
    deleteWarehouse: { // args
      id: number; // Int!
    }
    forgotPassword: { // args
      data: NexusGenInputs['ForgotPasswordInput']; // ForgotPasswordInput!
    }
    login: { // args
      data: NexusGenInputs['LoginInput']; // LoginInput!
    }
    register: { // args
      data: NexusGenInputs['RegisterInput']; // RegisterInput!
    }
    resetPassword: { // args
      data: NexusGenInputs['ResetPasswordInput']; // ResetPasswordInput!
    }
    updateCategory: { // args
      data: NexusGenInputs['UpdateCategoryInput']; // UpdateCategoryInput!
      id: number; // Int!
    }
    updateItem: { // args
      data: NexusGenInputs['UpdateItemInput']; // UpdateItemInput!
      id: number; // Int!
    }
    updateOutgoing: { // args
      data: NexusGenInputs['UpdateOutgoingInput']; // UpdateOutgoingInput!
      id: number; // Int!
    }
    updateRole: { // args
      data: NexusGenInputs['UpdateRoleInput']; // UpdateRoleInput!
      id: number; // Int!
    }
    updateStorage: { // args
      data: NexusGenInputs['UpdateStorageInput']; // UpdateStorageInput!
      id: number; // Int!
    }
    updateUser: { // args
      data: NexusGenInputs['UpdateUserInput']; // UpdateUserInput!
      id: number; // Int!
    }
    updateWarehouse: { // args
      data: NexusGenInputs['UpdateWarehouseInput']; // UpdateWarehouseInput!
      id: number; // Int!
    }
  }
  Query: {
    category: { // args
      id: number; // Int!
    }
    item: { // args
      id: number; // Int!
    }
    items: { // args
      query: string; // String!
    }
    outgoing: { // args
      id: number; // Int!
    }
    storage: { // args
      id: number; // Int!
    }
    warehouse: { // args
      id: number; // Int!
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Attribute" | "AttributeType" | "AuthenticationPayload" | "Category" | "Item" | "Log" | "Mutation" | "Outgoing" | "Position2D" | "Position3D" | "Query" | "ResetPasswordToken" | "Role" | "Size" | "Storage" | "Subscription" | "User" | "Warehouse";

export type NexusGenInputNames = "ChangePasswordInput" | "ConnectOrDisconnectRelation" | "ConnectRelation" | "CreateCategoryInput" | "CreateItemInput" | "CreateOutgoingInput" | "CreateRoleInput" | "CreateStorageInput" | "CreateWarehouseInput" | "ForgotPasswordInput" | "LoginInput" | "RegisterInput" | "ResetPasswordInput" | "UpdateCategoryInput" | "UpdateItemInput" | "UpdateOutgoingInput" | "UpdateRoleInput" | "UpdateStorageInput" | "UpdateUserInput" | "UpdateWarehouseInput";

export type NexusGenEnumNames = "AttributeTypeEnum" | "LogTypeEnum" | "RoleTypeEnum";

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "Date" | "Float" | "ID" | "Int" | "JSON" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: { prisma: PrismaClient.PrismaClient };
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
}