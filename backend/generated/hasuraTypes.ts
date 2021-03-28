import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  float8: any;
  grants: any;
  json: any;
  mime_types: any;
  timestamptz: any;
  uuid: any;
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

export type LoginOutput = {
  __typename?: 'LoginOutput';
  token: Scalars['String'];
};

export type RegisterOutput = {
  __typename?: 'RegisterOutput';
  id: Scalars['uuid'];
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "collaborators" */
export type Collaborators = {
  __typename?: 'collaborators';
  id: Scalars['uuid'];
  /** An object relationship */
  project: Projects;
  project_id: Scalars['uuid'];
  /** An object relationship */
  role: Roles;
  role_id: Scalars['uuid'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
};

/** aggregated selection of "collaborators" */
export type Collaborators_Aggregate = {
  __typename?: 'collaborators_aggregate';
  aggregate?: Maybe<Collaborators_Aggregate_Fields>;
  nodes: Array<Collaborators>;
};

/** aggregate fields of "collaborators" */
export type Collaborators_Aggregate_Fields = {
  __typename?: 'collaborators_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Collaborators_Max_Fields>;
  min?: Maybe<Collaborators_Min_Fields>;
};


/** aggregate fields of "collaborators" */
export type Collaborators_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Collaborators_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "collaborators" */
export type Collaborators_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Collaborators_Max_Order_By>;
  min?: Maybe<Collaborators_Min_Order_By>;
};

/** input type for inserting array relation for remote table "collaborators" */
export type Collaborators_Arr_Rel_Insert_Input = {
  data: Array<Collaborators_Insert_Input>;
  on_conflict?: Maybe<Collaborators_On_Conflict>;
};

/** Boolean expression to filter rows from the table "collaborators". All fields are combined with a logical 'AND'. */
export type Collaborators_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Collaborators_Bool_Exp>>>;
  _not?: Maybe<Collaborators_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Collaborators_Bool_Exp>>>;
  id?: Maybe<Uuid_Comparison_Exp>;
  project?: Maybe<Projects_Bool_Exp>;
  project_id?: Maybe<Uuid_Comparison_Exp>;
  role?: Maybe<Roles_Bool_Exp>;
  role_id?: Maybe<Uuid_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "collaborators" */
export enum Collaborators_Constraint {
  /** unique or primary key constraint */
  CollaboratorsPkey = 'collaborators_pkey'
}

/** input type for inserting data into table "collaborators" */
export type Collaborators_Insert_Input = {
  id?: Maybe<Scalars['uuid']>;
  project?: Maybe<Projects_Obj_Rel_Insert_Input>;
  project_id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Roles_Obj_Rel_Insert_Input>;
  role_id?: Maybe<Scalars['uuid']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Collaborators_Max_Fields = {
  __typename?: 'collaborators_max_fields';
  id?: Maybe<Scalars['uuid']>;
  project_id?: Maybe<Scalars['uuid']>;
  role_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "collaborators" */
export type Collaborators_Max_Order_By = {
  id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Collaborators_Min_Fields = {
  __typename?: 'collaborators_min_fields';
  id?: Maybe<Scalars['uuid']>;
  project_id?: Maybe<Scalars['uuid']>;
  role_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "collaborators" */
export type Collaborators_Min_Order_By = {
  id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "collaborators" */
export type Collaborators_Mutation_Response = {
  __typename?: 'collaborators_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Collaborators>;
};

/** input type for inserting object relation for remote table "collaborators" */
export type Collaborators_Obj_Rel_Insert_Input = {
  data: Collaborators_Insert_Input;
  on_conflict?: Maybe<Collaborators_On_Conflict>;
};

/** on conflict condition type for table "collaborators" */
export type Collaborators_On_Conflict = {
  constraint: Collaborators_Constraint;
  update_columns: Array<Collaborators_Update_Column>;
  where?: Maybe<Collaborators_Bool_Exp>;
};

/** ordering options when selecting data from "collaborators" */
export type Collaborators_Order_By = {
  id?: Maybe<Order_By>;
  project?: Maybe<Projects_Order_By>;
  project_id?: Maybe<Order_By>;
  role?: Maybe<Roles_Order_By>;
  role_id?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "collaborators" */
export type Collaborators_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "collaborators" */
export enum Collaborators_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ProjectId = 'project_id',
  /** column name */
  RoleId = 'role_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "collaborators" */
export type Collaborators_Set_Input = {
  id?: Maybe<Scalars['uuid']>;
  project_id?: Maybe<Scalars['uuid']>;
  role_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "collaborators" */
export enum Collaborators_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ProjectId = 'project_id',
  /** column name */
  RoleId = 'role_id',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "entries" */
export type Entries = {
  __typename?: 'entries';
  /** An array relationship */
  file_field_contents: Array<File_Field_Content>;
  /** An aggregated array relationship */
  file_field_contents_aggregate: File_Field_Content_Aggregate;
  id: Scalars['uuid'];
  /** An object relationship */
  model: Models;
  model_id: Scalars['uuid'];
  /** An array relationship */
  multi_line_field_contents: Array<Multi_Line_Field_Content>;
  /** An aggregated array relationship */
  multi_line_field_contents_aggregate: Multi_Line_Field_Content_Aggregate;
  /** An array relationship */
  single_line_field_contents: Array<Single_Line_Field_Content>;
  /** An aggregated array relationship */
  single_line_field_contents_aggregate: Single_Line_Field_Content_Aggregate;
  /** An object relationship */
  status: Entry_Status;
  /** Needs an on_insert trigger to automatically generate the status row */
  status_id: Scalars['uuid'];
};


/** columns and relationships of "entries" */
export type EntriesFile_Field_ContentsArgs = {
  distinct_on?: Maybe<Array<File_Field_Content_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<File_Field_Content_Order_By>>;
  where?: Maybe<File_Field_Content_Bool_Exp>;
};


/** columns and relationships of "entries" */
export type EntriesFile_Field_Contents_AggregateArgs = {
  distinct_on?: Maybe<Array<File_Field_Content_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<File_Field_Content_Order_By>>;
  where?: Maybe<File_Field_Content_Bool_Exp>;
};


/** columns and relationships of "entries" */
export type EntriesMulti_Line_Field_ContentsArgs = {
  distinct_on?: Maybe<Array<Multi_Line_Field_Content_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Multi_Line_Field_Content_Order_By>>;
  where?: Maybe<Multi_Line_Field_Content_Bool_Exp>;
};


/** columns and relationships of "entries" */
export type EntriesMulti_Line_Field_Contents_AggregateArgs = {
  distinct_on?: Maybe<Array<Multi_Line_Field_Content_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Multi_Line_Field_Content_Order_By>>;
  where?: Maybe<Multi_Line_Field_Content_Bool_Exp>;
};


/** columns and relationships of "entries" */
export type EntriesSingle_Line_Field_ContentsArgs = {
  distinct_on?: Maybe<Array<Single_Line_Field_Content_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Single_Line_Field_Content_Order_By>>;
  where?: Maybe<Single_Line_Field_Content_Bool_Exp>;
};


/** columns and relationships of "entries" */
export type EntriesSingle_Line_Field_Contents_AggregateArgs = {
  distinct_on?: Maybe<Array<Single_Line_Field_Content_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Single_Line_Field_Content_Order_By>>;
  where?: Maybe<Single_Line_Field_Content_Bool_Exp>;
};

/** aggregated selection of "entries" */
export type Entries_Aggregate = {
  __typename?: 'entries_aggregate';
  aggregate?: Maybe<Entries_Aggregate_Fields>;
  nodes: Array<Entries>;
};

/** aggregate fields of "entries" */
export type Entries_Aggregate_Fields = {
  __typename?: 'entries_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Entries_Max_Fields>;
  min?: Maybe<Entries_Min_Fields>;
};


/** aggregate fields of "entries" */
export type Entries_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Entries_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "entries" */
export type Entries_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Entries_Max_Order_By>;
  min?: Maybe<Entries_Min_Order_By>;
};

/** input type for inserting array relation for remote table "entries" */
export type Entries_Arr_Rel_Insert_Input = {
  data: Array<Entries_Insert_Input>;
  on_conflict?: Maybe<Entries_On_Conflict>;
};

/** Boolean expression to filter rows from the table "entries". All fields are combined with a logical 'AND'. */
export type Entries_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Entries_Bool_Exp>>>;
  _not?: Maybe<Entries_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Entries_Bool_Exp>>>;
  file_field_contents?: Maybe<File_Field_Content_Bool_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  model?: Maybe<Models_Bool_Exp>;
  model_id?: Maybe<Uuid_Comparison_Exp>;
  multi_line_field_contents?: Maybe<Multi_Line_Field_Content_Bool_Exp>;
  single_line_field_contents?: Maybe<Single_Line_Field_Content_Bool_Exp>;
  status?: Maybe<Entry_Status_Bool_Exp>;
  status_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "entries" */
export enum Entries_Constraint {
  /** unique or primary key constraint */
  EntriesPkey = 'entries_pkey'
}

/** input type for inserting data into table "entries" */
export type Entries_Insert_Input = {
  file_field_contents?: Maybe<File_Field_Content_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['uuid']>;
  model?: Maybe<Models_Obj_Rel_Insert_Input>;
  model_id?: Maybe<Scalars['uuid']>;
  multi_line_field_contents?: Maybe<Multi_Line_Field_Content_Arr_Rel_Insert_Input>;
  single_line_field_contents?: Maybe<Single_Line_Field_Content_Arr_Rel_Insert_Input>;
  status?: Maybe<Entry_Status_Obj_Rel_Insert_Input>;
  status_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Entries_Max_Fields = {
  __typename?: 'entries_max_fields';
  id?: Maybe<Scalars['uuid']>;
  model_id?: Maybe<Scalars['uuid']>;
  status_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "entries" */
export type Entries_Max_Order_By = {
  id?: Maybe<Order_By>;
  model_id?: Maybe<Order_By>;
  status_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Entries_Min_Fields = {
  __typename?: 'entries_min_fields';
  id?: Maybe<Scalars['uuid']>;
  model_id?: Maybe<Scalars['uuid']>;
  status_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "entries" */
export type Entries_Min_Order_By = {
  id?: Maybe<Order_By>;
  model_id?: Maybe<Order_By>;
  status_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "entries" */
export type Entries_Mutation_Response = {
  __typename?: 'entries_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Entries>;
};

/** input type for inserting object relation for remote table "entries" */
export type Entries_Obj_Rel_Insert_Input = {
  data: Entries_Insert_Input;
  on_conflict?: Maybe<Entries_On_Conflict>;
};

/** on conflict condition type for table "entries" */
export type Entries_On_Conflict = {
  constraint: Entries_Constraint;
  update_columns: Array<Entries_Update_Column>;
  where?: Maybe<Entries_Bool_Exp>;
};

/** ordering options when selecting data from "entries" */
export type Entries_Order_By = {
  file_field_contents_aggregate?: Maybe<File_Field_Content_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  model?: Maybe<Models_Order_By>;
  model_id?: Maybe<Order_By>;
  multi_line_field_contents_aggregate?: Maybe<Multi_Line_Field_Content_Aggregate_Order_By>;
  single_line_field_contents_aggregate?: Maybe<Single_Line_Field_Content_Aggregate_Order_By>;
  status?: Maybe<Entry_Status_Order_By>;
  status_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "entries" */
export type Entries_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "entries" */
export enum Entries_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ModelId = 'model_id',
  /** column name */
  StatusId = 'status_id'
}

/** input type for updating data in table "entries" */
export type Entries_Set_Input = {
  id?: Maybe<Scalars['uuid']>;
  model_id?: Maybe<Scalars['uuid']>;
  status_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "entries" */
export enum Entries_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ModelId = 'model_id',
  /** column name */
  StatusId = 'status_id'
}

/** columns and relationships of "entry_status" */
export type Entry_Status = {
  __typename?: 'entry_status';
  /** An object relationship */
  entry: Entries;
  entry_id: Scalars['uuid'];
  id: Scalars['uuid'];
  published: Scalars['Boolean'];
};

/** aggregated selection of "entry_status" */
export type Entry_Status_Aggregate = {
  __typename?: 'entry_status_aggregate';
  aggregate?: Maybe<Entry_Status_Aggregate_Fields>;
  nodes: Array<Entry_Status>;
};

/** aggregate fields of "entry_status" */
export type Entry_Status_Aggregate_Fields = {
  __typename?: 'entry_status_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Entry_Status_Max_Fields>;
  min?: Maybe<Entry_Status_Min_Fields>;
};


/** aggregate fields of "entry_status" */
export type Entry_Status_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Entry_Status_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "entry_status" */
export type Entry_Status_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Entry_Status_Max_Order_By>;
  min?: Maybe<Entry_Status_Min_Order_By>;
};

/** input type for inserting array relation for remote table "entry_status" */
export type Entry_Status_Arr_Rel_Insert_Input = {
  data: Array<Entry_Status_Insert_Input>;
  on_conflict?: Maybe<Entry_Status_On_Conflict>;
};

/** Boolean expression to filter rows from the table "entry_status". All fields are combined with a logical 'AND'. */
export type Entry_Status_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Entry_Status_Bool_Exp>>>;
  _not?: Maybe<Entry_Status_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Entry_Status_Bool_Exp>>>;
  entry?: Maybe<Entries_Bool_Exp>;
  entry_id?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  published?: Maybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "entry_status" */
export enum Entry_Status_Constraint {
  /** unique or primary key constraint */
  EntryStatusPkey = 'entry_status_pkey'
}

/** input type for inserting data into table "entry_status" */
export type Entry_Status_Insert_Input = {
  entry?: Maybe<Entries_Obj_Rel_Insert_Input>;
  entry_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  published?: Maybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Entry_Status_Max_Fields = {
  __typename?: 'entry_status_max_fields';
  entry_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "entry_status" */
export type Entry_Status_Max_Order_By = {
  entry_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Entry_Status_Min_Fields = {
  __typename?: 'entry_status_min_fields';
  entry_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "entry_status" */
export type Entry_Status_Min_Order_By = {
  entry_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** response of any mutation on the table "entry_status" */
export type Entry_Status_Mutation_Response = {
  __typename?: 'entry_status_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Entry_Status>;
};

/** input type for inserting object relation for remote table "entry_status" */
export type Entry_Status_Obj_Rel_Insert_Input = {
  data: Entry_Status_Insert_Input;
  on_conflict?: Maybe<Entry_Status_On_Conflict>;
};

/** on conflict condition type for table "entry_status" */
export type Entry_Status_On_Conflict = {
  constraint: Entry_Status_Constraint;
  update_columns: Array<Entry_Status_Update_Column>;
  where?: Maybe<Entry_Status_Bool_Exp>;
};

/** ordering options when selecting data from "entry_status" */
export type Entry_Status_Order_By = {
  entry?: Maybe<Entries_Order_By>;
  entry_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  published?: Maybe<Order_By>;
};

/** primary key columns input for table: "entry_status" */
export type Entry_Status_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "entry_status" */
export enum Entry_Status_Select_Column {
  /** column name */
  EntryId = 'entry_id',
  /** column name */
  Id = 'id',
  /** column name */
  Published = 'published'
}

/** input type for updating data in table "entry_status" */
export type Entry_Status_Set_Input = {
  entry_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  published?: Maybe<Scalars['Boolean']>;
};

/** update columns of table "entry_status" */
export enum Entry_Status_Update_Column {
  /** column name */
  EntryId = 'entry_id',
  /** column name */
  Id = 'id',
  /** column name */
  Published = 'published'
}

/** columns and relationships of "file_field" */
export type File_Field = {
  __typename?: 'file_field';
  api_name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  display_name: Scalars['String'];
  hidden: Scalars['Boolean'];
  id: Scalars['uuid'];
  /** An object relationship */
  model: Models;
  model_id: Scalars['uuid'];
  /** Somehow constrained */
  position?: Maybe<Scalars['Int']>;
  required: Scalars['Boolean'];
};

/** aggregated selection of "file_field" */
export type File_Field_Aggregate = {
  __typename?: 'file_field_aggregate';
  aggregate?: Maybe<File_Field_Aggregate_Fields>;
  nodes: Array<File_Field>;
};

/** aggregate fields of "file_field" */
export type File_Field_Aggregate_Fields = {
  __typename?: 'file_field_aggregate_fields';
  avg?: Maybe<File_Field_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<File_Field_Max_Fields>;
  min?: Maybe<File_Field_Min_Fields>;
  stddev?: Maybe<File_Field_Stddev_Fields>;
  stddev_pop?: Maybe<File_Field_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<File_Field_Stddev_Samp_Fields>;
  sum?: Maybe<File_Field_Sum_Fields>;
  var_pop?: Maybe<File_Field_Var_Pop_Fields>;
  var_samp?: Maybe<File_Field_Var_Samp_Fields>;
  variance?: Maybe<File_Field_Variance_Fields>;
};


/** aggregate fields of "file_field" */
export type File_Field_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<File_Field_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "file_field" */
export type File_Field_Aggregate_Order_By = {
  avg?: Maybe<File_Field_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<File_Field_Max_Order_By>;
  min?: Maybe<File_Field_Min_Order_By>;
  stddev?: Maybe<File_Field_Stddev_Order_By>;
  stddev_pop?: Maybe<File_Field_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<File_Field_Stddev_Samp_Order_By>;
  sum?: Maybe<File_Field_Sum_Order_By>;
  var_pop?: Maybe<File_Field_Var_Pop_Order_By>;
  var_samp?: Maybe<File_Field_Var_Samp_Order_By>;
  variance?: Maybe<File_Field_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "file_field" */
export type File_Field_Arr_Rel_Insert_Input = {
  data: Array<File_Field_Insert_Input>;
  on_conflict?: Maybe<File_Field_On_Conflict>;
};

/** aggregate avg on columns */
export type File_Field_Avg_Fields = {
  __typename?: 'file_field_avg_fields';
  position?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "file_field" */
export type File_Field_Avg_Order_By = {
  position?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "file_field". All fields are combined with a logical 'AND'. */
export type File_Field_Bool_Exp = {
  _and?: Maybe<Array<Maybe<File_Field_Bool_Exp>>>;
  _not?: Maybe<File_Field_Bool_Exp>;
  _or?: Maybe<Array<Maybe<File_Field_Bool_Exp>>>;
  api_name?: Maybe<String_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  display_name?: Maybe<String_Comparison_Exp>;
  hidden?: Maybe<Boolean_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  model?: Maybe<Models_Bool_Exp>;
  model_id?: Maybe<Uuid_Comparison_Exp>;
  position?: Maybe<Int_Comparison_Exp>;
  required?: Maybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "file_field" */
export enum File_Field_Constraint {
  /** unique or primary key constraint */
  FileFieldIdKey = 'file_field_id_key',
  /** unique or primary key constraint */
  FileFieldPkey = 'file_field_pkey'
}

/** columns and relationships of "file_field_content" */
export type File_Field_Content = {
  __typename?: 'file_field_content';
  entry_id: Scalars['uuid'];
  /** An object relationship */
  field: File_Field;
  field_id: Scalars['uuid'];
  file_location: Scalars['String'];
  file_name: Scalars['String'];
  height?: Maybe<Scalars['float8']>;
  id: Scalars['uuid'];
  mime_type: Scalars['mime_types'];
  /** In bytes */
  size: Scalars['Int'];
  width?: Maybe<Scalars['float8']>;
};

/** aggregated selection of "file_field_content" */
export type File_Field_Content_Aggregate = {
  __typename?: 'file_field_content_aggregate';
  aggregate?: Maybe<File_Field_Content_Aggregate_Fields>;
  nodes: Array<File_Field_Content>;
};

/** aggregate fields of "file_field_content" */
export type File_Field_Content_Aggregate_Fields = {
  __typename?: 'file_field_content_aggregate_fields';
  avg?: Maybe<File_Field_Content_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<File_Field_Content_Max_Fields>;
  min?: Maybe<File_Field_Content_Min_Fields>;
  stddev?: Maybe<File_Field_Content_Stddev_Fields>;
  stddev_pop?: Maybe<File_Field_Content_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<File_Field_Content_Stddev_Samp_Fields>;
  sum?: Maybe<File_Field_Content_Sum_Fields>;
  var_pop?: Maybe<File_Field_Content_Var_Pop_Fields>;
  var_samp?: Maybe<File_Field_Content_Var_Samp_Fields>;
  variance?: Maybe<File_Field_Content_Variance_Fields>;
};


/** aggregate fields of "file_field_content" */
export type File_Field_Content_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<File_Field_Content_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "file_field_content" */
export type File_Field_Content_Aggregate_Order_By = {
  avg?: Maybe<File_Field_Content_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<File_Field_Content_Max_Order_By>;
  min?: Maybe<File_Field_Content_Min_Order_By>;
  stddev?: Maybe<File_Field_Content_Stddev_Order_By>;
  stddev_pop?: Maybe<File_Field_Content_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<File_Field_Content_Stddev_Samp_Order_By>;
  sum?: Maybe<File_Field_Content_Sum_Order_By>;
  var_pop?: Maybe<File_Field_Content_Var_Pop_Order_By>;
  var_samp?: Maybe<File_Field_Content_Var_Samp_Order_By>;
  variance?: Maybe<File_Field_Content_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "file_field_content" */
export type File_Field_Content_Arr_Rel_Insert_Input = {
  data: Array<File_Field_Content_Insert_Input>;
  on_conflict?: Maybe<File_Field_Content_On_Conflict>;
};

/** aggregate avg on columns */
export type File_Field_Content_Avg_Fields = {
  __typename?: 'file_field_content_avg_fields';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "file_field_content" */
export type File_Field_Content_Avg_Order_By = {
  height?: Maybe<Order_By>;
  size?: Maybe<Order_By>;
  width?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "file_field_content". All fields are combined with a logical 'AND'. */
export type File_Field_Content_Bool_Exp = {
  _and?: Maybe<Array<Maybe<File_Field_Content_Bool_Exp>>>;
  _not?: Maybe<File_Field_Content_Bool_Exp>;
  _or?: Maybe<Array<Maybe<File_Field_Content_Bool_Exp>>>;
  entry_id?: Maybe<Uuid_Comparison_Exp>;
  field?: Maybe<File_Field_Bool_Exp>;
  field_id?: Maybe<Uuid_Comparison_Exp>;
  file_location?: Maybe<String_Comparison_Exp>;
  file_name?: Maybe<String_Comparison_Exp>;
  height?: Maybe<Float8_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  mime_type?: Maybe<Mime_Types_Comparison_Exp>;
  size?: Maybe<Int_Comparison_Exp>;
  width?: Maybe<Float8_Comparison_Exp>;
};

/** unique or primary key constraints on table "file_field_content" */
export enum File_Field_Content_Constraint {
  /** unique or primary key constraint */
  FileFieldContentFileLocationKey = 'file_field_content_file_location_key',
  /** unique or primary key constraint */
  FileFieldContentIdKey = 'file_field_content_id_key',
  /** unique or primary key constraint */
  FileFieldContentPkey = 'file_field_content_pkey'
}

/** input type for incrementing integer column in table "file_field_content" */
export type File_Field_Content_Inc_Input = {
  height?: Maybe<Scalars['float8']>;
  size?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['float8']>;
};

/** input type for inserting data into table "file_field_content" */
export type File_Field_Content_Insert_Input = {
  entry_id?: Maybe<Scalars['uuid']>;
  field?: Maybe<File_Field_Obj_Rel_Insert_Input>;
  field_id?: Maybe<Scalars['uuid']>;
  file_location?: Maybe<Scalars['String']>;
  file_name?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['float8']>;
  id?: Maybe<Scalars['uuid']>;
  mime_type?: Maybe<Scalars['mime_types']>;
  size?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['float8']>;
};

/** aggregate max on columns */
export type File_Field_Content_Max_Fields = {
  __typename?: 'file_field_content_max_fields';
  entry_id?: Maybe<Scalars['uuid']>;
  field_id?: Maybe<Scalars['uuid']>;
  file_location?: Maybe<Scalars['String']>;
  file_name?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['float8']>;
  id?: Maybe<Scalars['uuid']>;
  size?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['float8']>;
};

/** order by max() on columns of table "file_field_content" */
export type File_Field_Content_Max_Order_By = {
  entry_id?: Maybe<Order_By>;
  field_id?: Maybe<Order_By>;
  file_location?: Maybe<Order_By>;
  file_name?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  size?: Maybe<Order_By>;
  width?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type File_Field_Content_Min_Fields = {
  __typename?: 'file_field_content_min_fields';
  entry_id?: Maybe<Scalars['uuid']>;
  field_id?: Maybe<Scalars['uuid']>;
  file_location?: Maybe<Scalars['String']>;
  file_name?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['float8']>;
  id?: Maybe<Scalars['uuid']>;
  size?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['float8']>;
};

/** order by min() on columns of table "file_field_content" */
export type File_Field_Content_Min_Order_By = {
  entry_id?: Maybe<Order_By>;
  field_id?: Maybe<Order_By>;
  file_location?: Maybe<Order_By>;
  file_name?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  size?: Maybe<Order_By>;
  width?: Maybe<Order_By>;
};

/** response of any mutation on the table "file_field_content" */
export type File_Field_Content_Mutation_Response = {
  __typename?: 'file_field_content_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<File_Field_Content>;
};

/** input type for inserting object relation for remote table "file_field_content" */
export type File_Field_Content_Obj_Rel_Insert_Input = {
  data: File_Field_Content_Insert_Input;
  on_conflict?: Maybe<File_Field_Content_On_Conflict>;
};

/** on conflict condition type for table "file_field_content" */
export type File_Field_Content_On_Conflict = {
  constraint: File_Field_Content_Constraint;
  update_columns: Array<File_Field_Content_Update_Column>;
  where?: Maybe<File_Field_Content_Bool_Exp>;
};

/** ordering options when selecting data from "file_field_content" */
export type File_Field_Content_Order_By = {
  entry_id?: Maybe<Order_By>;
  field?: Maybe<File_Field_Order_By>;
  field_id?: Maybe<Order_By>;
  file_location?: Maybe<Order_By>;
  file_name?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mime_type?: Maybe<Order_By>;
  size?: Maybe<Order_By>;
  width?: Maybe<Order_By>;
};

/** primary key columns input for table: "file_field_content" */
export type File_Field_Content_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "file_field_content" */
export enum File_Field_Content_Select_Column {
  /** column name */
  EntryId = 'entry_id',
  /** column name */
  FieldId = 'field_id',
  /** column name */
  FileLocation = 'file_location',
  /** column name */
  FileName = 'file_name',
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id',
  /** column name */
  MimeType = 'mime_type',
  /** column name */
  Size = 'size',
  /** column name */
  Width = 'width'
}

/** input type for updating data in table "file_field_content" */
export type File_Field_Content_Set_Input = {
  entry_id?: Maybe<Scalars['uuid']>;
  field_id?: Maybe<Scalars['uuid']>;
  file_location?: Maybe<Scalars['String']>;
  file_name?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['float8']>;
  id?: Maybe<Scalars['uuid']>;
  mime_type?: Maybe<Scalars['mime_types']>;
  size?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['float8']>;
};

/** aggregate stddev on columns */
export type File_Field_Content_Stddev_Fields = {
  __typename?: 'file_field_content_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "file_field_content" */
export type File_Field_Content_Stddev_Order_By = {
  height?: Maybe<Order_By>;
  size?: Maybe<Order_By>;
  width?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type File_Field_Content_Stddev_Pop_Fields = {
  __typename?: 'file_field_content_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "file_field_content" */
export type File_Field_Content_Stddev_Pop_Order_By = {
  height?: Maybe<Order_By>;
  size?: Maybe<Order_By>;
  width?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type File_Field_Content_Stddev_Samp_Fields = {
  __typename?: 'file_field_content_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "file_field_content" */
export type File_Field_Content_Stddev_Samp_Order_By = {
  height?: Maybe<Order_By>;
  size?: Maybe<Order_By>;
  width?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type File_Field_Content_Sum_Fields = {
  __typename?: 'file_field_content_sum_fields';
  height?: Maybe<Scalars['float8']>;
  size?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['float8']>;
};

/** order by sum() on columns of table "file_field_content" */
export type File_Field_Content_Sum_Order_By = {
  height?: Maybe<Order_By>;
  size?: Maybe<Order_By>;
  width?: Maybe<Order_By>;
};

/** update columns of table "file_field_content" */
export enum File_Field_Content_Update_Column {
  /** column name */
  EntryId = 'entry_id',
  /** column name */
  FieldId = 'field_id',
  /** column name */
  FileLocation = 'file_location',
  /** column name */
  FileName = 'file_name',
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id',
  /** column name */
  MimeType = 'mime_type',
  /** column name */
  Size = 'size',
  /** column name */
  Width = 'width'
}

/** aggregate var_pop on columns */
export type File_Field_Content_Var_Pop_Fields = {
  __typename?: 'file_field_content_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "file_field_content" */
export type File_Field_Content_Var_Pop_Order_By = {
  height?: Maybe<Order_By>;
  size?: Maybe<Order_By>;
  width?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type File_Field_Content_Var_Samp_Fields = {
  __typename?: 'file_field_content_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "file_field_content" */
export type File_Field_Content_Var_Samp_Order_By = {
  height?: Maybe<Order_By>;
  size?: Maybe<Order_By>;
  width?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type File_Field_Content_Variance_Fields = {
  __typename?: 'file_field_content_variance_fields';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "file_field_content" */
export type File_Field_Content_Variance_Order_By = {
  height?: Maybe<Order_By>;
  size?: Maybe<Order_By>;
  width?: Maybe<Order_By>;
};

/** input type for incrementing integer column in table "file_field" */
export type File_Field_Inc_Input = {
  position?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "file_field" */
export type File_Field_Insert_Input = {
  api_name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  hidden?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['uuid']>;
  model?: Maybe<Models_Obj_Rel_Insert_Input>;
  model_id?: Maybe<Scalars['uuid']>;
  position?: Maybe<Scalars['Int']>;
  required?: Maybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type File_Field_Max_Fields = {
  __typename?: 'file_field_max_fields';
  api_name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  model_id?: Maybe<Scalars['uuid']>;
  position?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "file_field" */
export type File_Field_Max_Order_By = {
  api_name?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  model_id?: Maybe<Order_By>;
  position?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type File_Field_Min_Fields = {
  __typename?: 'file_field_min_fields';
  api_name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  model_id?: Maybe<Scalars['uuid']>;
  position?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "file_field" */
export type File_Field_Min_Order_By = {
  api_name?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  model_id?: Maybe<Order_By>;
  position?: Maybe<Order_By>;
};

/** response of any mutation on the table "file_field" */
export type File_Field_Mutation_Response = {
  __typename?: 'file_field_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<File_Field>;
};

/** input type for inserting object relation for remote table "file_field" */
export type File_Field_Obj_Rel_Insert_Input = {
  data: File_Field_Insert_Input;
  on_conflict?: Maybe<File_Field_On_Conflict>;
};

/** on conflict condition type for table "file_field" */
export type File_Field_On_Conflict = {
  constraint: File_Field_Constraint;
  update_columns: Array<File_Field_Update_Column>;
  where?: Maybe<File_Field_Bool_Exp>;
};

/** ordering options when selecting data from "file_field" */
export type File_Field_Order_By = {
  api_name?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  hidden?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  model?: Maybe<Models_Order_By>;
  model_id?: Maybe<Order_By>;
  position?: Maybe<Order_By>;
  required?: Maybe<Order_By>;
};

/** primary key columns input for table: "file_field" */
export type File_Field_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "file_field" */
export enum File_Field_Select_Column {
  /** column name */
  ApiName = 'api_name',
  /** column name */
  Description = 'description',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  Hidden = 'hidden',
  /** column name */
  Id = 'id',
  /** column name */
  ModelId = 'model_id',
  /** column name */
  Position = 'position',
  /** column name */
  Required = 'required'
}

/** input type for updating data in table "file_field" */
export type File_Field_Set_Input = {
  api_name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  hidden?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['uuid']>;
  model_id?: Maybe<Scalars['uuid']>;
  position?: Maybe<Scalars['Int']>;
  required?: Maybe<Scalars['Boolean']>;
};

/** aggregate stddev on columns */
export type File_Field_Stddev_Fields = {
  __typename?: 'file_field_stddev_fields';
  position?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "file_field" */
export type File_Field_Stddev_Order_By = {
  position?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type File_Field_Stddev_Pop_Fields = {
  __typename?: 'file_field_stddev_pop_fields';
  position?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "file_field" */
export type File_Field_Stddev_Pop_Order_By = {
  position?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type File_Field_Stddev_Samp_Fields = {
  __typename?: 'file_field_stddev_samp_fields';
  position?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "file_field" */
export type File_Field_Stddev_Samp_Order_By = {
  position?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type File_Field_Sum_Fields = {
  __typename?: 'file_field_sum_fields';
  position?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "file_field" */
export type File_Field_Sum_Order_By = {
  position?: Maybe<Order_By>;
};

/** update columns of table "file_field" */
export enum File_Field_Update_Column {
  /** column name */
  ApiName = 'api_name',
  /** column name */
  Description = 'description',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  Hidden = 'hidden',
  /** column name */
  Id = 'id',
  /** column name */
  ModelId = 'model_id',
  /** column name */
  Position = 'position',
  /** column name */
  Required = 'required'
}

/** aggregate var_pop on columns */
export type File_Field_Var_Pop_Fields = {
  __typename?: 'file_field_var_pop_fields';
  position?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "file_field" */
export type File_Field_Var_Pop_Order_By = {
  position?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type File_Field_Var_Samp_Fields = {
  __typename?: 'file_field_var_samp_fields';
  position?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "file_field" */
export type File_Field_Var_Samp_Order_By = {
  position?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type File_Field_Variance_Fields = {
  __typename?: 'file_field_variance_fields';
  position?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "file_field" */
export type File_Field_Variance_Order_By = {
  position?: Maybe<Order_By>;
};


/** expression to compare columns of type float8. All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: Maybe<Scalars['float8']>;
  _gt?: Maybe<Scalars['float8']>;
  _gte?: Maybe<Scalars['float8']>;
  _in?: Maybe<Array<Scalars['float8']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['float8']>;
  _lte?: Maybe<Scalars['float8']>;
  _neq?: Maybe<Scalars['float8']>;
  _nin?: Maybe<Array<Scalars['float8']>>;
};


/** expression to compare columns of type grants. All fields are combined with logical 'AND'. */
export type Grants_Comparison_Exp = {
  _eq?: Maybe<Scalars['grants']>;
  _gt?: Maybe<Scalars['grants']>;
  _gte?: Maybe<Scalars['grants']>;
  _in?: Maybe<Array<Scalars['grants']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['grants']>;
  _lte?: Maybe<Scalars['grants']>;
  _neq?: Maybe<Scalars['grants']>;
  _nin?: Maybe<Array<Scalars['grants']>>;
};


/** expression to compare columns of type json. All fields are combined with logical 'AND'. */
export type Json_Comparison_Exp = {
  _eq?: Maybe<Scalars['json']>;
  _gt?: Maybe<Scalars['json']>;
  _gte?: Maybe<Scalars['json']>;
  _in?: Maybe<Array<Scalars['json']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['json']>;
  _lte?: Maybe<Scalars['json']>;
  _neq?: Maybe<Scalars['json']>;
  _nin?: Maybe<Array<Scalars['json']>>;
};


/** expression to compare columns of type mime_types. All fields are combined with logical 'AND'. */
export type Mime_Types_Comparison_Exp = {
  _eq?: Maybe<Scalars['mime_types']>;
  _gt?: Maybe<Scalars['mime_types']>;
  _gte?: Maybe<Scalars['mime_types']>;
  _in?: Maybe<Array<Scalars['mime_types']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['mime_types']>;
  _lte?: Maybe<Scalars['mime_types']>;
  _neq?: Maybe<Scalars['mime_types']>;
  _nin?: Maybe<Array<Scalars['mime_types']>>;
};

/** columns and relationships of "models" */
export type Models = {
  __typename?: 'models';
  api_name: Scalars['String'];
  display_name: Scalars['String'];
  /** An array relationship */
  entries: Array<Entries>;
  /** An aggregated array relationship */
  entries_aggregate: Entries_Aggregate;
  /** An array relationship */
  file_fields: Array<File_Field>;
  /** An aggregated array relationship */
  file_fields_aggregate: File_Field_Aggregate;
  id: Scalars['uuid'];
  /** An array relationship */
  multi_line_fields: Array<Multi_Line_Field>;
  /** An aggregated array relationship */
  multi_line_fields_aggregate: Multi_Line_Field_Aggregate;
  /** An object relationship */
  project: Projects;
  project_id: Scalars['uuid'];
  /** An array relationship */
  single_line_fields: Array<Single_Line_Field>;
  /** An aggregated array relationship */
  single_line_fields_aggregate: Single_Line_Field_Aggregate;
};


/** columns and relationships of "models" */
export type ModelsEntriesArgs = {
  distinct_on?: Maybe<Array<Entries_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Entries_Order_By>>;
  where?: Maybe<Entries_Bool_Exp>;
};


/** columns and relationships of "models" */
export type ModelsEntries_AggregateArgs = {
  distinct_on?: Maybe<Array<Entries_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Entries_Order_By>>;
  where?: Maybe<Entries_Bool_Exp>;
};


/** columns and relationships of "models" */
export type ModelsFile_FieldsArgs = {
  distinct_on?: Maybe<Array<File_Field_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<File_Field_Order_By>>;
  where?: Maybe<File_Field_Bool_Exp>;
};


/** columns and relationships of "models" */
export type ModelsFile_Fields_AggregateArgs = {
  distinct_on?: Maybe<Array<File_Field_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<File_Field_Order_By>>;
  where?: Maybe<File_Field_Bool_Exp>;
};


/** columns and relationships of "models" */
export type ModelsMulti_Line_FieldsArgs = {
  distinct_on?: Maybe<Array<Multi_Line_Field_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Multi_Line_Field_Order_By>>;
  where?: Maybe<Multi_Line_Field_Bool_Exp>;
};


/** columns and relationships of "models" */
export type ModelsMulti_Line_Fields_AggregateArgs = {
  distinct_on?: Maybe<Array<Multi_Line_Field_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Multi_Line_Field_Order_By>>;
  where?: Maybe<Multi_Line_Field_Bool_Exp>;
};


/** columns and relationships of "models" */
export type ModelsSingle_Line_FieldsArgs = {
  distinct_on?: Maybe<Array<Single_Line_Field_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Single_Line_Field_Order_By>>;
  where?: Maybe<Single_Line_Field_Bool_Exp>;
};


/** columns and relationships of "models" */
export type ModelsSingle_Line_Fields_AggregateArgs = {
  distinct_on?: Maybe<Array<Single_Line_Field_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Single_Line_Field_Order_By>>;
  where?: Maybe<Single_Line_Field_Bool_Exp>;
};

/** aggregated selection of "models" */
export type Models_Aggregate = {
  __typename?: 'models_aggregate';
  aggregate?: Maybe<Models_Aggregate_Fields>;
  nodes: Array<Models>;
};

/** aggregate fields of "models" */
export type Models_Aggregate_Fields = {
  __typename?: 'models_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Models_Max_Fields>;
  min?: Maybe<Models_Min_Fields>;
};


/** aggregate fields of "models" */
export type Models_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Models_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "models" */
export type Models_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Models_Max_Order_By>;
  min?: Maybe<Models_Min_Order_By>;
};

/** input type for inserting array relation for remote table "models" */
export type Models_Arr_Rel_Insert_Input = {
  data: Array<Models_Insert_Input>;
  on_conflict?: Maybe<Models_On_Conflict>;
};

/** Boolean expression to filter rows from the table "models". All fields are combined with a logical 'AND'. */
export type Models_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Models_Bool_Exp>>>;
  _not?: Maybe<Models_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Models_Bool_Exp>>>;
  api_name?: Maybe<String_Comparison_Exp>;
  display_name?: Maybe<String_Comparison_Exp>;
  entries?: Maybe<Entries_Bool_Exp>;
  file_fields?: Maybe<File_Field_Bool_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  multi_line_fields?: Maybe<Multi_Line_Field_Bool_Exp>;
  project?: Maybe<Projects_Bool_Exp>;
  project_id?: Maybe<Uuid_Comparison_Exp>;
  single_line_fields?: Maybe<Single_Line_Field_Bool_Exp>;
};

/** unique or primary key constraints on table "models" */
export enum Models_Constraint {
  /** unique or primary key constraint */
  ModelsApiIdKey = 'models_api_id_key',
  /** unique or primary key constraint */
  ModelsDisplayNameKey = 'models_display_name_key',
  /** unique or primary key constraint */
  ModelsIdKey = 'models_id_key',
  /** unique or primary key constraint */
  ModelsPkey = 'models_pkey'
}

/** input type for inserting data into table "models" */
export type Models_Insert_Input = {
  api_name?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  entries?: Maybe<Entries_Arr_Rel_Insert_Input>;
  file_fields?: Maybe<File_Field_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['uuid']>;
  multi_line_fields?: Maybe<Multi_Line_Field_Arr_Rel_Insert_Input>;
  project?: Maybe<Projects_Obj_Rel_Insert_Input>;
  project_id?: Maybe<Scalars['uuid']>;
  single_line_fields?: Maybe<Single_Line_Field_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Models_Max_Fields = {
  __typename?: 'models_max_fields';
  api_name?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  project_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "models" */
export type Models_Max_Order_By = {
  api_name?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Models_Min_Fields = {
  __typename?: 'models_min_fields';
  api_name?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  project_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "models" */
export type Models_Min_Order_By = {
  api_name?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "models" */
export type Models_Mutation_Response = {
  __typename?: 'models_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Models>;
};

/** input type for inserting object relation for remote table "models" */
export type Models_Obj_Rel_Insert_Input = {
  data: Models_Insert_Input;
  on_conflict?: Maybe<Models_On_Conflict>;
};

/** on conflict condition type for table "models" */
export type Models_On_Conflict = {
  constraint: Models_Constraint;
  update_columns: Array<Models_Update_Column>;
  where?: Maybe<Models_Bool_Exp>;
};

/** ordering options when selecting data from "models" */
export type Models_Order_By = {
  api_name?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  entries_aggregate?: Maybe<Entries_Aggregate_Order_By>;
  file_fields_aggregate?: Maybe<File_Field_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  multi_line_fields_aggregate?: Maybe<Multi_Line_Field_Aggregate_Order_By>;
  project?: Maybe<Projects_Order_By>;
  project_id?: Maybe<Order_By>;
  single_line_fields_aggregate?: Maybe<Single_Line_Field_Aggregate_Order_By>;
};

/** primary key columns input for table: "models" */
export type Models_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "models" */
export enum Models_Select_Column {
  /** column name */
  ApiName = 'api_name',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  Id = 'id',
  /** column name */
  ProjectId = 'project_id'
}

/** input type for updating data in table "models" */
export type Models_Set_Input = {
  api_name?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  project_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "models" */
export enum Models_Update_Column {
  /** column name */
  ApiName = 'api_name',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  Id = 'id',
  /** column name */
  ProjectId = 'project_id'
}

/** columns and relationships of "multi_line_field" */
export type Multi_Line_Field = {
  __typename?: 'multi_line_field';
  api_name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  display_name: Scalars['String'];
  hidden: Scalars['Boolean'];
  id: Scalars['uuid'];
  /** An object relationship */
  model: Models;
  model_id: Scalars['uuid'];
  /** Somehow constrained */
  position?: Maybe<Scalars['Int']>;
  required: Scalars['Boolean'];
};

/** aggregated selection of "multi_line_field" */
export type Multi_Line_Field_Aggregate = {
  __typename?: 'multi_line_field_aggregate';
  aggregate?: Maybe<Multi_Line_Field_Aggregate_Fields>;
  nodes: Array<Multi_Line_Field>;
};

/** aggregate fields of "multi_line_field" */
export type Multi_Line_Field_Aggregate_Fields = {
  __typename?: 'multi_line_field_aggregate_fields';
  avg?: Maybe<Multi_Line_Field_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Multi_Line_Field_Max_Fields>;
  min?: Maybe<Multi_Line_Field_Min_Fields>;
  stddev?: Maybe<Multi_Line_Field_Stddev_Fields>;
  stddev_pop?: Maybe<Multi_Line_Field_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Multi_Line_Field_Stddev_Samp_Fields>;
  sum?: Maybe<Multi_Line_Field_Sum_Fields>;
  var_pop?: Maybe<Multi_Line_Field_Var_Pop_Fields>;
  var_samp?: Maybe<Multi_Line_Field_Var_Samp_Fields>;
  variance?: Maybe<Multi_Line_Field_Variance_Fields>;
};


/** aggregate fields of "multi_line_field" */
export type Multi_Line_Field_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Multi_Line_Field_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "multi_line_field" */
export type Multi_Line_Field_Aggregate_Order_By = {
  avg?: Maybe<Multi_Line_Field_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Multi_Line_Field_Max_Order_By>;
  min?: Maybe<Multi_Line_Field_Min_Order_By>;
  stddev?: Maybe<Multi_Line_Field_Stddev_Order_By>;
  stddev_pop?: Maybe<Multi_Line_Field_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Multi_Line_Field_Stddev_Samp_Order_By>;
  sum?: Maybe<Multi_Line_Field_Sum_Order_By>;
  var_pop?: Maybe<Multi_Line_Field_Var_Pop_Order_By>;
  var_samp?: Maybe<Multi_Line_Field_Var_Samp_Order_By>;
  variance?: Maybe<Multi_Line_Field_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "multi_line_field" */
export type Multi_Line_Field_Arr_Rel_Insert_Input = {
  data: Array<Multi_Line_Field_Insert_Input>;
  on_conflict?: Maybe<Multi_Line_Field_On_Conflict>;
};

/** aggregate avg on columns */
export type Multi_Line_Field_Avg_Fields = {
  __typename?: 'multi_line_field_avg_fields';
  position?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "multi_line_field" */
export type Multi_Line_Field_Avg_Order_By = {
  position?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "multi_line_field". All fields are combined with a logical 'AND'. */
export type Multi_Line_Field_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Multi_Line_Field_Bool_Exp>>>;
  _not?: Maybe<Multi_Line_Field_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Multi_Line_Field_Bool_Exp>>>;
  api_name?: Maybe<String_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  display_name?: Maybe<String_Comparison_Exp>;
  hidden?: Maybe<Boolean_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  model?: Maybe<Models_Bool_Exp>;
  model_id?: Maybe<Uuid_Comparison_Exp>;
  position?: Maybe<Int_Comparison_Exp>;
  required?: Maybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "multi_line_field" */
export enum Multi_Line_Field_Constraint {
  /** unique or primary key constraint */
  MultiLineFieldIdKey = 'multi_line_field_id_key',
  /** unique or primary key constraint */
  MultiLineFieldPkey = 'multi_line_field_pkey'
}

/** columns and relationships of "multi_line_field_content" */
export type Multi_Line_Field_Content = {
  __typename?: 'multi_line_field_content';
  content?: Maybe<Scalars['String']>;
  entry_id: Scalars['uuid'];
  /** An object relationship */
  field: Multi_Line_Field;
  field_id: Scalars['uuid'];
  id: Scalars['uuid'];
};

/** aggregated selection of "multi_line_field_content" */
export type Multi_Line_Field_Content_Aggregate = {
  __typename?: 'multi_line_field_content_aggregate';
  aggregate?: Maybe<Multi_Line_Field_Content_Aggregate_Fields>;
  nodes: Array<Multi_Line_Field_Content>;
};

/** aggregate fields of "multi_line_field_content" */
export type Multi_Line_Field_Content_Aggregate_Fields = {
  __typename?: 'multi_line_field_content_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Multi_Line_Field_Content_Max_Fields>;
  min?: Maybe<Multi_Line_Field_Content_Min_Fields>;
};


/** aggregate fields of "multi_line_field_content" */
export type Multi_Line_Field_Content_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Multi_Line_Field_Content_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "multi_line_field_content" */
export type Multi_Line_Field_Content_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Multi_Line_Field_Content_Max_Order_By>;
  min?: Maybe<Multi_Line_Field_Content_Min_Order_By>;
};

/** input type for inserting array relation for remote table "multi_line_field_content" */
export type Multi_Line_Field_Content_Arr_Rel_Insert_Input = {
  data: Array<Multi_Line_Field_Content_Insert_Input>;
  on_conflict?: Maybe<Multi_Line_Field_Content_On_Conflict>;
};

/** Boolean expression to filter rows from the table "multi_line_field_content". All fields are combined with a logical 'AND'. */
export type Multi_Line_Field_Content_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Multi_Line_Field_Content_Bool_Exp>>>;
  _not?: Maybe<Multi_Line_Field_Content_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Multi_Line_Field_Content_Bool_Exp>>>;
  content?: Maybe<String_Comparison_Exp>;
  entry_id?: Maybe<Uuid_Comparison_Exp>;
  field?: Maybe<Multi_Line_Field_Bool_Exp>;
  field_id?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "multi_line_field_content" */
export enum Multi_Line_Field_Content_Constraint {
  /** unique or primary key constraint */
  MultiLineFieldContentIdKey = 'multi_line_field_content_id_key',
  /** unique or primary key constraint */
  MultiLineFieldContentPkey = 'multi_line_field_content_pkey'
}

/** input type for inserting data into table "multi_line_field_content" */
export type Multi_Line_Field_Content_Insert_Input = {
  content?: Maybe<Scalars['String']>;
  entry_id?: Maybe<Scalars['uuid']>;
  field?: Maybe<Multi_Line_Field_Obj_Rel_Insert_Input>;
  field_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Multi_Line_Field_Content_Max_Fields = {
  __typename?: 'multi_line_field_content_max_fields';
  content?: Maybe<Scalars['String']>;
  entry_id?: Maybe<Scalars['uuid']>;
  field_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "multi_line_field_content" */
export type Multi_Line_Field_Content_Max_Order_By = {
  content?: Maybe<Order_By>;
  entry_id?: Maybe<Order_By>;
  field_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Multi_Line_Field_Content_Min_Fields = {
  __typename?: 'multi_line_field_content_min_fields';
  content?: Maybe<Scalars['String']>;
  entry_id?: Maybe<Scalars['uuid']>;
  field_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "multi_line_field_content" */
export type Multi_Line_Field_Content_Min_Order_By = {
  content?: Maybe<Order_By>;
  entry_id?: Maybe<Order_By>;
  field_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** response of any mutation on the table "multi_line_field_content" */
export type Multi_Line_Field_Content_Mutation_Response = {
  __typename?: 'multi_line_field_content_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Multi_Line_Field_Content>;
};

/** input type for inserting object relation for remote table "multi_line_field_content" */
export type Multi_Line_Field_Content_Obj_Rel_Insert_Input = {
  data: Multi_Line_Field_Content_Insert_Input;
  on_conflict?: Maybe<Multi_Line_Field_Content_On_Conflict>;
};

/** on conflict condition type for table "multi_line_field_content" */
export type Multi_Line_Field_Content_On_Conflict = {
  constraint: Multi_Line_Field_Content_Constraint;
  update_columns: Array<Multi_Line_Field_Content_Update_Column>;
  where?: Maybe<Multi_Line_Field_Content_Bool_Exp>;
};

/** ordering options when selecting data from "multi_line_field_content" */
export type Multi_Line_Field_Content_Order_By = {
  content?: Maybe<Order_By>;
  entry_id?: Maybe<Order_By>;
  field?: Maybe<Multi_Line_Field_Order_By>;
  field_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** primary key columns input for table: "multi_line_field_content" */
export type Multi_Line_Field_Content_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "multi_line_field_content" */
export enum Multi_Line_Field_Content_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  EntryId = 'entry_id',
  /** column name */
  FieldId = 'field_id',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "multi_line_field_content" */
export type Multi_Line_Field_Content_Set_Input = {
  content?: Maybe<Scalars['String']>;
  entry_id?: Maybe<Scalars['uuid']>;
  field_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "multi_line_field_content" */
export enum Multi_Line_Field_Content_Update_Column {
  /** column name */
  Content = 'content',
  /** column name */
  EntryId = 'entry_id',
  /** column name */
  FieldId = 'field_id',
  /** column name */
  Id = 'id'
}

/** input type for incrementing integer column in table "multi_line_field" */
export type Multi_Line_Field_Inc_Input = {
  position?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "multi_line_field" */
export type Multi_Line_Field_Insert_Input = {
  api_name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  hidden?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['uuid']>;
  model?: Maybe<Models_Obj_Rel_Insert_Input>;
  model_id?: Maybe<Scalars['uuid']>;
  position?: Maybe<Scalars['Int']>;
  required?: Maybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Multi_Line_Field_Max_Fields = {
  __typename?: 'multi_line_field_max_fields';
  api_name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  model_id?: Maybe<Scalars['uuid']>;
  position?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "multi_line_field" */
export type Multi_Line_Field_Max_Order_By = {
  api_name?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  model_id?: Maybe<Order_By>;
  position?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Multi_Line_Field_Min_Fields = {
  __typename?: 'multi_line_field_min_fields';
  api_name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  model_id?: Maybe<Scalars['uuid']>;
  position?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "multi_line_field" */
export type Multi_Line_Field_Min_Order_By = {
  api_name?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  model_id?: Maybe<Order_By>;
  position?: Maybe<Order_By>;
};

/** response of any mutation on the table "multi_line_field" */
export type Multi_Line_Field_Mutation_Response = {
  __typename?: 'multi_line_field_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Multi_Line_Field>;
};

/** input type for inserting object relation for remote table "multi_line_field" */
export type Multi_Line_Field_Obj_Rel_Insert_Input = {
  data: Multi_Line_Field_Insert_Input;
  on_conflict?: Maybe<Multi_Line_Field_On_Conflict>;
};

/** on conflict condition type for table "multi_line_field" */
export type Multi_Line_Field_On_Conflict = {
  constraint: Multi_Line_Field_Constraint;
  update_columns: Array<Multi_Line_Field_Update_Column>;
  where?: Maybe<Multi_Line_Field_Bool_Exp>;
};

/** ordering options when selecting data from "multi_line_field" */
export type Multi_Line_Field_Order_By = {
  api_name?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  hidden?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  model?: Maybe<Models_Order_By>;
  model_id?: Maybe<Order_By>;
  position?: Maybe<Order_By>;
  required?: Maybe<Order_By>;
};

/** primary key columns input for table: "multi_line_field" */
export type Multi_Line_Field_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "multi_line_field" */
export enum Multi_Line_Field_Select_Column {
  /** column name */
  ApiName = 'api_name',
  /** column name */
  Description = 'description',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  Hidden = 'hidden',
  /** column name */
  Id = 'id',
  /** column name */
  ModelId = 'model_id',
  /** column name */
  Position = 'position',
  /** column name */
  Required = 'required'
}

/** input type for updating data in table "multi_line_field" */
export type Multi_Line_Field_Set_Input = {
  api_name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  hidden?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['uuid']>;
  model_id?: Maybe<Scalars['uuid']>;
  position?: Maybe<Scalars['Int']>;
  required?: Maybe<Scalars['Boolean']>;
};

/** aggregate stddev on columns */
export type Multi_Line_Field_Stddev_Fields = {
  __typename?: 'multi_line_field_stddev_fields';
  position?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "multi_line_field" */
export type Multi_Line_Field_Stddev_Order_By = {
  position?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Multi_Line_Field_Stddev_Pop_Fields = {
  __typename?: 'multi_line_field_stddev_pop_fields';
  position?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "multi_line_field" */
export type Multi_Line_Field_Stddev_Pop_Order_By = {
  position?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Multi_Line_Field_Stddev_Samp_Fields = {
  __typename?: 'multi_line_field_stddev_samp_fields';
  position?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "multi_line_field" */
export type Multi_Line_Field_Stddev_Samp_Order_By = {
  position?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Multi_Line_Field_Sum_Fields = {
  __typename?: 'multi_line_field_sum_fields';
  position?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "multi_line_field" */
export type Multi_Line_Field_Sum_Order_By = {
  position?: Maybe<Order_By>;
};

/** update columns of table "multi_line_field" */
export enum Multi_Line_Field_Update_Column {
  /** column name */
  ApiName = 'api_name',
  /** column name */
  Description = 'description',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  Hidden = 'hidden',
  /** column name */
  Id = 'id',
  /** column name */
  ModelId = 'model_id',
  /** column name */
  Position = 'position',
  /** column name */
  Required = 'required'
}

/** aggregate var_pop on columns */
export type Multi_Line_Field_Var_Pop_Fields = {
  __typename?: 'multi_line_field_var_pop_fields';
  position?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "multi_line_field" */
export type Multi_Line_Field_Var_Pop_Order_By = {
  position?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Multi_Line_Field_Var_Samp_Fields = {
  __typename?: 'multi_line_field_var_samp_fields';
  position?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "multi_line_field" */
export type Multi_Line_Field_Var_Samp_Order_By = {
  position?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Multi_Line_Field_Variance_Fields = {
  __typename?: 'multi_line_field_variance_fields';
  position?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "multi_line_field" */
export type Multi_Line_Field_Variance_Order_By = {
  position?: Maybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "collaborators" */
  delete_collaborators?: Maybe<Collaborators_Mutation_Response>;
  /** delete single row from the table: "collaborators" */
  delete_collaborators_by_pk?: Maybe<Collaborators>;
  /** delete data from the table: "entries" */
  delete_entries?: Maybe<Entries_Mutation_Response>;
  /** delete single row from the table: "entries" */
  delete_entries_by_pk?: Maybe<Entries>;
  /** delete data from the table: "entry_status" */
  delete_entry_status?: Maybe<Entry_Status_Mutation_Response>;
  /** delete single row from the table: "entry_status" */
  delete_entry_status_by_pk?: Maybe<Entry_Status>;
  /** delete data from the table: "file_field" */
  delete_file_field?: Maybe<File_Field_Mutation_Response>;
  /** delete single row from the table: "file_field" */
  delete_file_field_by_pk?: Maybe<File_Field>;
  /** delete data from the table: "file_field_content" */
  delete_file_field_content?: Maybe<File_Field_Content_Mutation_Response>;
  /** delete single row from the table: "file_field_content" */
  delete_file_field_content_by_pk?: Maybe<File_Field_Content>;
  /** delete data from the table: "models" */
  delete_models?: Maybe<Models_Mutation_Response>;
  /** delete single row from the table: "models" */
  delete_models_by_pk?: Maybe<Models>;
  /** delete data from the table: "multi_line_field" */
  delete_multi_line_field?: Maybe<Multi_Line_Field_Mutation_Response>;
  /** delete single row from the table: "multi_line_field" */
  delete_multi_line_field_by_pk?: Maybe<Multi_Line_Field>;
  /** delete data from the table: "multi_line_field_content" */
  delete_multi_line_field_content?: Maybe<Multi_Line_Field_Content_Mutation_Response>;
  /** delete single row from the table: "multi_line_field_content" */
  delete_multi_line_field_content_by_pk?: Maybe<Multi_Line_Field_Content>;
  /** delete data from the table: "projects" */
  delete_projects?: Maybe<Projects_Mutation_Response>;
  /** delete single row from the table: "projects" */
  delete_projects_by_pk?: Maybe<Projects>;
  /** delete data from the table: "role_grants" */
  delete_role_grants?: Maybe<Role_Grants_Mutation_Response>;
  /** delete single row from the table: "role_grants" */
  delete_role_grants_by_pk?: Maybe<Role_Grants>;
  /** delete data from the table: "roles" */
  delete_roles?: Maybe<Roles_Mutation_Response>;
  /** delete single row from the table: "roles" */
  delete_roles_by_pk?: Maybe<Roles>;
  /** delete data from the table: "single_line_field" */
  delete_single_line_field?: Maybe<Single_Line_Field_Mutation_Response>;
  /** delete single row from the table: "single_line_field" */
  delete_single_line_field_by_pk?: Maybe<Single_Line_Field>;
  /** delete data from the table: "single_line_field_content" */
  delete_single_line_field_content?: Maybe<Single_Line_Field_Content_Mutation_Response>;
  /** delete single row from the table: "single_line_field_content" */
  delete_single_line_field_content_by_pk?: Maybe<Single_Line_Field_Content>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "collaborators" */
  insert_collaborators?: Maybe<Collaborators_Mutation_Response>;
  /** insert a single row into the table: "collaborators" */
  insert_collaborators_one?: Maybe<Collaborators>;
  /** insert data into the table: "entries" */
  insert_entries?: Maybe<Entries_Mutation_Response>;
  /** insert a single row into the table: "entries" */
  insert_entries_one?: Maybe<Entries>;
  /** insert data into the table: "entry_status" */
  insert_entry_status?: Maybe<Entry_Status_Mutation_Response>;
  /** insert a single row into the table: "entry_status" */
  insert_entry_status_one?: Maybe<Entry_Status>;
  /** insert data into the table: "file_field" */
  insert_file_field?: Maybe<File_Field_Mutation_Response>;
  /** insert data into the table: "file_field_content" */
  insert_file_field_content?: Maybe<File_Field_Content_Mutation_Response>;
  /** insert a single row into the table: "file_field_content" */
  insert_file_field_content_one?: Maybe<File_Field_Content>;
  /** insert a single row into the table: "file_field" */
  insert_file_field_one?: Maybe<File_Field>;
  /** insert data into the table: "models" */
  insert_models?: Maybe<Models_Mutation_Response>;
  /** insert a single row into the table: "models" */
  insert_models_one?: Maybe<Models>;
  /** insert data into the table: "multi_line_field" */
  insert_multi_line_field?: Maybe<Multi_Line_Field_Mutation_Response>;
  /** insert data into the table: "multi_line_field_content" */
  insert_multi_line_field_content?: Maybe<Multi_Line_Field_Content_Mutation_Response>;
  /** insert a single row into the table: "multi_line_field_content" */
  insert_multi_line_field_content_one?: Maybe<Multi_Line_Field_Content>;
  /** insert a single row into the table: "multi_line_field" */
  insert_multi_line_field_one?: Maybe<Multi_Line_Field>;
  /** insert data into the table: "projects" */
  insert_projects?: Maybe<Projects_Mutation_Response>;
  /** insert a single row into the table: "projects" */
  insert_projects_one?: Maybe<Projects>;
  /** insert data into the table: "role_grants" */
  insert_role_grants?: Maybe<Role_Grants_Mutation_Response>;
  /** insert a single row into the table: "role_grants" */
  insert_role_grants_one?: Maybe<Role_Grants>;
  /** insert data into the table: "roles" */
  insert_roles?: Maybe<Roles_Mutation_Response>;
  /** insert a single row into the table: "roles" */
  insert_roles_one?: Maybe<Roles>;
  /** insert data into the table: "single_line_field" */
  insert_single_line_field?: Maybe<Single_Line_Field_Mutation_Response>;
  /** insert data into the table: "single_line_field_content" */
  insert_single_line_field_content?: Maybe<Single_Line_Field_Content_Mutation_Response>;
  /** insert a single row into the table: "single_line_field_content" */
  insert_single_line_field_content_one?: Maybe<Single_Line_Field_Content>;
  /** insert a single row into the table: "single_line_field" */
  insert_single_line_field_one?: Maybe<Single_Line_Field>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** perform the action: "login" */
  login?: Maybe<LoginOutput>;
  /** perform the action: "register" */
  register?: Maybe<RegisterOutput>;
  /** update data of the table: "collaborators" */
  update_collaborators?: Maybe<Collaborators_Mutation_Response>;
  /** update single row of the table: "collaborators" */
  update_collaborators_by_pk?: Maybe<Collaborators>;
  /** update data of the table: "entries" */
  update_entries?: Maybe<Entries_Mutation_Response>;
  /** update single row of the table: "entries" */
  update_entries_by_pk?: Maybe<Entries>;
  /** update data of the table: "entry_status" */
  update_entry_status?: Maybe<Entry_Status_Mutation_Response>;
  /** update single row of the table: "entry_status" */
  update_entry_status_by_pk?: Maybe<Entry_Status>;
  /** update data of the table: "file_field" */
  update_file_field?: Maybe<File_Field_Mutation_Response>;
  /** update single row of the table: "file_field" */
  update_file_field_by_pk?: Maybe<File_Field>;
  /** update data of the table: "file_field_content" */
  update_file_field_content?: Maybe<File_Field_Content_Mutation_Response>;
  /** update single row of the table: "file_field_content" */
  update_file_field_content_by_pk?: Maybe<File_Field_Content>;
  /** update data of the table: "models" */
  update_models?: Maybe<Models_Mutation_Response>;
  /** update single row of the table: "models" */
  update_models_by_pk?: Maybe<Models>;
  /** update data of the table: "multi_line_field" */
  update_multi_line_field?: Maybe<Multi_Line_Field_Mutation_Response>;
  /** update single row of the table: "multi_line_field" */
  update_multi_line_field_by_pk?: Maybe<Multi_Line_Field>;
  /** update data of the table: "multi_line_field_content" */
  update_multi_line_field_content?: Maybe<Multi_Line_Field_Content_Mutation_Response>;
  /** update single row of the table: "multi_line_field_content" */
  update_multi_line_field_content_by_pk?: Maybe<Multi_Line_Field_Content>;
  /** update data of the table: "projects" */
  update_projects?: Maybe<Projects_Mutation_Response>;
  /** update single row of the table: "projects" */
  update_projects_by_pk?: Maybe<Projects>;
  /** update data of the table: "role_grants" */
  update_role_grants?: Maybe<Role_Grants_Mutation_Response>;
  /** update single row of the table: "role_grants" */
  update_role_grants_by_pk?: Maybe<Role_Grants>;
  /** update data of the table: "roles" */
  update_roles?: Maybe<Roles_Mutation_Response>;
  /** update single row of the table: "roles" */
  update_roles_by_pk?: Maybe<Roles>;
  /** update data of the table: "single_line_field" */
  update_single_line_field?: Maybe<Single_Line_Field_Mutation_Response>;
  /** update single row of the table: "single_line_field" */
  update_single_line_field_by_pk?: Maybe<Single_Line_Field>;
  /** update data of the table: "single_line_field_content" */
  update_single_line_field_content?: Maybe<Single_Line_Field_Content_Mutation_Response>;
  /** update single row of the table: "single_line_field_content" */
  update_single_line_field_content_by_pk?: Maybe<Single_Line_Field_Content>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};


/** mutation root */
export type Mutation_RootDelete_CollaboratorsArgs = {
  where: Collaborators_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Collaborators_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_EntriesArgs = {
  where: Entries_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Entries_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Entry_StatusArgs = {
  where: Entry_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Entry_Status_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_File_FieldArgs = {
  where: File_Field_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_File_Field_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_File_Field_ContentArgs = {
  where: File_Field_Content_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_File_Field_Content_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_ModelsArgs = {
  where: Models_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Models_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Multi_Line_FieldArgs = {
  where: Multi_Line_Field_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Multi_Line_Field_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Multi_Line_Field_ContentArgs = {
  where: Multi_Line_Field_Content_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Multi_Line_Field_Content_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_ProjectsArgs = {
  where: Projects_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Projects_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Role_GrantsArgs = {
  where: Role_Grants_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Role_Grants_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_RolesArgs = {
  where: Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Roles_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Single_Line_FieldArgs = {
  where: Single_Line_Field_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Single_Line_Field_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Single_Line_Field_ContentArgs = {
  where: Single_Line_Field_Content_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Single_Line_Field_Content_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_CollaboratorsArgs = {
  objects: Array<Collaborators_Insert_Input>;
  on_conflict?: Maybe<Collaborators_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Collaborators_OneArgs = {
  object: Collaborators_Insert_Input;
  on_conflict?: Maybe<Collaborators_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_EntriesArgs = {
  objects: Array<Entries_Insert_Input>;
  on_conflict?: Maybe<Entries_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Entries_OneArgs = {
  object: Entries_Insert_Input;
  on_conflict?: Maybe<Entries_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Entry_StatusArgs = {
  objects: Array<Entry_Status_Insert_Input>;
  on_conflict?: Maybe<Entry_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Entry_Status_OneArgs = {
  object: Entry_Status_Insert_Input;
  on_conflict?: Maybe<Entry_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_File_FieldArgs = {
  objects: Array<File_Field_Insert_Input>;
  on_conflict?: Maybe<File_Field_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_File_Field_ContentArgs = {
  objects: Array<File_Field_Content_Insert_Input>;
  on_conflict?: Maybe<File_Field_Content_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_File_Field_Content_OneArgs = {
  object: File_Field_Content_Insert_Input;
  on_conflict?: Maybe<File_Field_Content_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_File_Field_OneArgs = {
  object: File_Field_Insert_Input;
  on_conflict?: Maybe<File_Field_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ModelsArgs = {
  objects: Array<Models_Insert_Input>;
  on_conflict?: Maybe<Models_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Models_OneArgs = {
  object: Models_Insert_Input;
  on_conflict?: Maybe<Models_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Multi_Line_FieldArgs = {
  objects: Array<Multi_Line_Field_Insert_Input>;
  on_conflict?: Maybe<Multi_Line_Field_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Multi_Line_Field_ContentArgs = {
  objects: Array<Multi_Line_Field_Content_Insert_Input>;
  on_conflict?: Maybe<Multi_Line_Field_Content_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Multi_Line_Field_Content_OneArgs = {
  object: Multi_Line_Field_Content_Insert_Input;
  on_conflict?: Maybe<Multi_Line_Field_Content_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Multi_Line_Field_OneArgs = {
  object: Multi_Line_Field_Insert_Input;
  on_conflict?: Maybe<Multi_Line_Field_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProjectsArgs = {
  objects: Array<Projects_Insert_Input>;
  on_conflict?: Maybe<Projects_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Projects_OneArgs = {
  object: Projects_Insert_Input;
  on_conflict?: Maybe<Projects_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Role_GrantsArgs = {
  objects: Array<Role_Grants_Insert_Input>;
  on_conflict?: Maybe<Role_Grants_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Role_Grants_OneArgs = {
  object: Role_Grants_Insert_Input;
  on_conflict?: Maybe<Role_Grants_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RolesArgs = {
  objects: Array<Roles_Insert_Input>;
  on_conflict?: Maybe<Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Roles_OneArgs = {
  object: Roles_Insert_Input;
  on_conflict?: Maybe<Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Single_Line_FieldArgs = {
  objects: Array<Single_Line_Field_Insert_Input>;
  on_conflict?: Maybe<Single_Line_Field_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Single_Line_Field_ContentArgs = {
  objects: Array<Single_Line_Field_Content_Insert_Input>;
  on_conflict?: Maybe<Single_Line_Field_Content_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Single_Line_Field_Content_OneArgs = {
  object: Single_Line_Field_Content_Insert_Input;
  on_conflict?: Maybe<Single_Line_Field_Content_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Single_Line_Field_OneArgs = {
  object: Single_Line_Field_Insert_Input;
  on_conflict?: Maybe<Single_Line_Field_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootLoginArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootRegisterArgs = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};


/** mutation root */
export type Mutation_RootUpdate_CollaboratorsArgs = {
  _set?: Maybe<Collaborators_Set_Input>;
  where: Collaborators_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Collaborators_By_PkArgs = {
  _set?: Maybe<Collaborators_Set_Input>;
  pk_columns: Collaborators_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_EntriesArgs = {
  _set?: Maybe<Entries_Set_Input>;
  where: Entries_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Entries_By_PkArgs = {
  _set?: Maybe<Entries_Set_Input>;
  pk_columns: Entries_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Entry_StatusArgs = {
  _set?: Maybe<Entry_Status_Set_Input>;
  where: Entry_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Entry_Status_By_PkArgs = {
  _set?: Maybe<Entry_Status_Set_Input>;
  pk_columns: Entry_Status_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_File_FieldArgs = {
  _inc?: Maybe<File_Field_Inc_Input>;
  _set?: Maybe<File_Field_Set_Input>;
  where: File_Field_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_File_Field_By_PkArgs = {
  _inc?: Maybe<File_Field_Inc_Input>;
  _set?: Maybe<File_Field_Set_Input>;
  pk_columns: File_Field_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_File_Field_ContentArgs = {
  _inc?: Maybe<File_Field_Content_Inc_Input>;
  _set?: Maybe<File_Field_Content_Set_Input>;
  where: File_Field_Content_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_File_Field_Content_By_PkArgs = {
  _inc?: Maybe<File_Field_Content_Inc_Input>;
  _set?: Maybe<File_Field_Content_Set_Input>;
  pk_columns: File_Field_Content_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ModelsArgs = {
  _set?: Maybe<Models_Set_Input>;
  where: Models_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Models_By_PkArgs = {
  _set?: Maybe<Models_Set_Input>;
  pk_columns: Models_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Multi_Line_FieldArgs = {
  _inc?: Maybe<Multi_Line_Field_Inc_Input>;
  _set?: Maybe<Multi_Line_Field_Set_Input>;
  where: Multi_Line_Field_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Multi_Line_Field_By_PkArgs = {
  _inc?: Maybe<Multi_Line_Field_Inc_Input>;
  _set?: Maybe<Multi_Line_Field_Set_Input>;
  pk_columns: Multi_Line_Field_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Multi_Line_Field_ContentArgs = {
  _set?: Maybe<Multi_Line_Field_Content_Set_Input>;
  where: Multi_Line_Field_Content_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Multi_Line_Field_Content_By_PkArgs = {
  _set?: Maybe<Multi_Line_Field_Content_Set_Input>;
  pk_columns: Multi_Line_Field_Content_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ProjectsArgs = {
  _set?: Maybe<Projects_Set_Input>;
  where: Projects_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Projects_By_PkArgs = {
  _set?: Maybe<Projects_Set_Input>;
  pk_columns: Projects_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Role_GrantsArgs = {
  _set?: Maybe<Role_Grants_Set_Input>;
  where: Role_Grants_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Role_Grants_By_PkArgs = {
  _set?: Maybe<Role_Grants_Set_Input>;
  pk_columns: Role_Grants_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_RolesArgs = {
  _set?: Maybe<Roles_Set_Input>;
  where: Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Roles_By_PkArgs = {
  _set?: Maybe<Roles_Set_Input>;
  pk_columns: Roles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Single_Line_FieldArgs = {
  _inc?: Maybe<Single_Line_Field_Inc_Input>;
  _set?: Maybe<Single_Line_Field_Set_Input>;
  where: Single_Line_Field_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Single_Line_Field_By_PkArgs = {
  _inc?: Maybe<Single_Line_Field_Inc_Input>;
  _set?: Maybe<Single_Line_Field_Set_Input>;
  pk_columns: Single_Line_Field_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Single_Line_Field_ContentArgs = {
  _set?: Maybe<Single_Line_Field_Content_Set_Input>;
  where: Single_Line_Field_Content_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Single_Line_Field_Content_By_PkArgs = {
  _set?: Maybe<Single_Line_Field_Content_Set_Input>;
  pk_columns: Single_Line_Field_Content_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "projects" */
export type Projects = {
  __typename?: 'projects';
  /** An array relationship */
  collaborators: Array<Collaborators>;
  /** An aggregated array relationship */
  collaborators_aggregate: Collaborators_Aggregate;
  description?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  /** An array relationship */
  models: Array<Models>;
  /** An aggregated array relationship */
  models_aggregate: Models_Aggregate;
  name: Scalars['String'];
  /** An object relationship */
  owner: Users;
  owner_id: Scalars['uuid'];
  /** An array relationship */
  roles: Array<Roles>;
  /** An aggregated array relationship */
  roles_aggregate: Roles_Aggregate;
};


/** columns and relationships of "projects" */
export type ProjectsCollaboratorsArgs = {
  distinct_on?: Maybe<Array<Collaborators_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Collaborators_Order_By>>;
  where?: Maybe<Collaborators_Bool_Exp>;
};


/** columns and relationships of "projects" */
export type ProjectsCollaborators_AggregateArgs = {
  distinct_on?: Maybe<Array<Collaborators_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Collaborators_Order_By>>;
  where?: Maybe<Collaborators_Bool_Exp>;
};


/** columns and relationships of "projects" */
export type ProjectsModelsArgs = {
  distinct_on?: Maybe<Array<Models_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Models_Order_By>>;
  where?: Maybe<Models_Bool_Exp>;
};


/** columns and relationships of "projects" */
export type ProjectsModels_AggregateArgs = {
  distinct_on?: Maybe<Array<Models_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Models_Order_By>>;
  where?: Maybe<Models_Bool_Exp>;
};


/** columns and relationships of "projects" */
export type ProjectsRolesArgs = {
  distinct_on?: Maybe<Array<Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Roles_Order_By>>;
  where?: Maybe<Roles_Bool_Exp>;
};


/** columns and relationships of "projects" */
export type ProjectsRoles_AggregateArgs = {
  distinct_on?: Maybe<Array<Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Roles_Order_By>>;
  where?: Maybe<Roles_Bool_Exp>;
};

/** aggregated selection of "projects" */
export type Projects_Aggregate = {
  __typename?: 'projects_aggregate';
  aggregate?: Maybe<Projects_Aggregate_Fields>;
  nodes: Array<Projects>;
};

/** aggregate fields of "projects" */
export type Projects_Aggregate_Fields = {
  __typename?: 'projects_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Projects_Max_Fields>;
  min?: Maybe<Projects_Min_Fields>;
};


/** aggregate fields of "projects" */
export type Projects_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Projects_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "projects" */
export type Projects_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Projects_Max_Order_By>;
  min?: Maybe<Projects_Min_Order_By>;
};

/** input type for inserting array relation for remote table "projects" */
export type Projects_Arr_Rel_Insert_Input = {
  data: Array<Projects_Insert_Input>;
  on_conflict?: Maybe<Projects_On_Conflict>;
};

/** Boolean expression to filter rows from the table "projects". All fields are combined with a logical 'AND'. */
export type Projects_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Projects_Bool_Exp>>>;
  _not?: Maybe<Projects_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Projects_Bool_Exp>>>;
  collaborators?: Maybe<Collaborators_Bool_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  models?: Maybe<Models_Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  owner?: Maybe<Users_Bool_Exp>;
  owner_id?: Maybe<Uuid_Comparison_Exp>;
  roles?: Maybe<Roles_Bool_Exp>;
};

/** unique or primary key constraints on table "projects" */
export enum Projects_Constraint {
  /** unique or primary key constraint */
  ProjectsPkey = 'projects_pkey'
}

/** input type for inserting data into table "projects" */
export type Projects_Insert_Input = {
  collaborators?: Maybe<Collaborators_Arr_Rel_Insert_Input>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  models?: Maybe<Models_Arr_Rel_Insert_Input>;
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<Users_Obj_Rel_Insert_Input>;
  owner_id?: Maybe<Scalars['uuid']>;
  roles?: Maybe<Roles_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Projects_Max_Fields = {
  __typename?: 'projects_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  owner_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "projects" */
export type Projects_Max_Order_By = {
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  owner_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Projects_Min_Fields = {
  __typename?: 'projects_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  owner_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "projects" */
export type Projects_Min_Order_By = {
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  owner_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "projects" */
export type Projects_Mutation_Response = {
  __typename?: 'projects_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Projects>;
};

/** input type for inserting object relation for remote table "projects" */
export type Projects_Obj_Rel_Insert_Input = {
  data: Projects_Insert_Input;
  on_conflict?: Maybe<Projects_On_Conflict>;
};

/** on conflict condition type for table "projects" */
export type Projects_On_Conflict = {
  constraint: Projects_Constraint;
  update_columns: Array<Projects_Update_Column>;
  where?: Maybe<Projects_Bool_Exp>;
};

/** ordering options when selecting data from "projects" */
export type Projects_Order_By = {
  collaborators_aggregate?: Maybe<Collaborators_Aggregate_Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  models_aggregate?: Maybe<Models_Aggregate_Order_By>;
  name?: Maybe<Order_By>;
  owner?: Maybe<Users_Order_By>;
  owner_id?: Maybe<Order_By>;
  roles_aggregate?: Maybe<Roles_Aggregate_Order_By>;
};

/** primary key columns input for table: "projects" */
export type Projects_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "projects" */
export enum Projects_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  OwnerId = 'owner_id'
}

/** input type for updating data in table "projects" */
export type Projects_Set_Input = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  owner_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "projects" */
export enum Projects_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  OwnerId = 'owner_id'
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "collaborators" */
  collaborators: Array<Collaborators>;
  /** fetch aggregated fields from the table: "collaborators" */
  collaborators_aggregate: Collaborators_Aggregate;
  /** fetch data from the table: "collaborators" using primary key columns */
  collaborators_by_pk?: Maybe<Collaborators>;
  /** fetch data from the table: "entries" */
  entries: Array<Entries>;
  /** fetch aggregated fields from the table: "entries" */
  entries_aggregate: Entries_Aggregate;
  /** fetch data from the table: "entries" using primary key columns */
  entries_by_pk?: Maybe<Entries>;
  /** fetch data from the table: "entry_status" */
  entry_status: Array<Entry_Status>;
  /** fetch aggregated fields from the table: "entry_status" */
  entry_status_aggregate: Entry_Status_Aggregate;
  /** fetch data from the table: "entry_status" using primary key columns */
  entry_status_by_pk?: Maybe<Entry_Status>;
  /** fetch data from the table: "file_field" */
  file_field: Array<File_Field>;
  /** fetch aggregated fields from the table: "file_field" */
  file_field_aggregate: File_Field_Aggregate;
  /** fetch data from the table: "file_field" using primary key columns */
  file_field_by_pk?: Maybe<File_Field>;
  /** fetch data from the table: "file_field_content" */
  file_field_content: Array<File_Field_Content>;
  /** fetch aggregated fields from the table: "file_field_content" */
  file_field_content_aggregate: File_Field_Content_Aggregate;
  /** fetch data from the table: "file_field_content" using primary key columns */
  file_field_content_by_pk?: Maybe<File_Field_Content>;
  /** execute function "me" which returns "users" */
  me: Array<Users>;
  /** execute function "me" and query aggregates on result of table type "users" */
  me_aggregate: Users_Aggregate;
  /** fetch data from the table: "models" */
  models: Array<Models>;
  /** fetch aggregated fields from the table: "models" */
  models_aggregate: Models_Aggregate;
  /** fetch data from the table: "models" using primary key columns */
  models_by_pk?: Maybe<Models>;
  /** fetch data from the table: "multi_line_field" */
  multi_line_field: Array<Multi_Line_Field>;
  /** fetch aggregated fields from the table: "multi_line_field" */
  multi_line_field_aggregate: Multi_Line_Field_Aggregate;
  /** fetch data from the table: "multi_line_field" using primary key columns */
  multi_line_field_by_pk?: Maybe<Multi_Line_Field>;
  /** fetch data from the table: "multi_line_field_content" */
  multi_line_field_content: Array<Multi_Line_Field_Content>;
  /** fetch aggregated fields from the table: "multi_line_field_content" */
  multi_line_field_content_aggregate: Multi_Line_Field_Content_Aggregate;
  /** fetch data from the table: "multi_line_field_content" using primary key columns */
  multi_line_field_content_by_pk?: Maybe<Multi_Line_Field_Content>;
  /** fetch data from the table: "projects" */
  projects: Array<Projects>;
  /** fetch aggregated fields from the table: "projects" */
  projects_aggregate: Projects_Aggregate;
  /** fetch data from the table: "projects" using primary key columns */
  projects_by_pk?: Maybe<Projects>;
  /** fetch data from the table: "role_grants" */
  role_grants: Array<Role_Grants>;
  /** fetch aggregated fields from the table: "role_grants" */
  role_grants_aggregate: Role_Grants_Aggregate;
  /** fetch data from the table: "role_grants" using primary key columns */
  role_grants_by_pk?: Maybe<Role_Grants>;
  /** fetch data from the table: "roles" */
  roles: Array<Roles>;
  /** fetch aggregated fields from the table: "roles" */
  roles_aggregate: Roles_Aggregate;
  /** fetch data from the table: "roles" using primary key columns */
  roles_by_pk?: Maybe<Roles>;
  /** fetch data from the table: "single_line_field" */
  single_line_field: Array<Single_Line_Field>;
  /** fetch aggregated fields from the table: "single_line_field" */
  single_line_field_aggregate: Single_Line_Field_Aggregate;
  /** fetch data from the table: "single_line_field" using primary key columns */
  single_line_field_by_pk?: Maybe<Single_Line_Field>;
  /** fetch data from the table: "single_line_field_content" */
  single_line_field_content: Array<Single_Line_Field_Content>;
  /** fetch aggregated fields from the table: "single_line_field_content" */
  single_line_field_content_aggregate: Single_Line_Field_Content_Aggregate;
  /** fetch data from the table: "single_line_field_content" using primary key columns */
  single_line_field_content_by_pk?: Maybe<Single_Line_Field_Content>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


/** query root */
export type Query_RootCollaboratorsArgs = {
  distinct_on?: Maybe<Array<Collaborators_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Collaborators_Order_By>>;
  where?: Maybe<Collaborators_Bool_Exp>;
};


/** query root */
export type Query_RootCollaborators_AggregateArgs = {
  distinct_on?: Maybe<Array<Collaborators_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Collaborators_Order_By>>;
  where?: Maybe<Collaborators_Bool_Exp>;
};


/** query root */
export type Query_RootCollaborators_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootEntriesArgs = {
  distinct_on?: Maybe<Array<Entries_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Entries_Order_By>>;
  where?: Maybe<Entries_Bool_Exp>;
};


/** query root */
export type Query_RootEntries_AggregateArgs = {
  distinct_on?: Maybe<Array<Entries_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Entries_Order_By>>;
  where?: Maybe<Entries_Bool_Exp>;
};


/** query root */
export type Query_RootEntries_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootEntry_StatusArgs = {
  distinct_on?: Maybe<Array<Entry_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Entry_Status_Order_By>>;
  where?: Maybe<Entry_Status_Bool_Exp>;
};


/** query root */
export type Query_RootEntry_Status_AggregateArgs = {
  distinct_on?: Maybe<Array<Entry_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Entry_Status_Order_By>>;
  where?: Maybe<Entry_Status_Bool_Exp>;
};


/** query root */
export type Query_RootEntry_Status_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootFile_FieldArgs = {
  distinct_on?: Maybe<Array<File_Field_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<File_Field_Order_By>>;
  where?: Maybe<File_Field_Bool_Exp>;
};


/** query root */
export type Query_RootFile_Field_AggregateArgs = {
  distinct_on?: Maybe<Array<File_Field_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<File_Field_Order_By>>;
  where?: Maybe<File_Field_Bool_Exp>;
};


/** query root */
export type Query_RootFile_Field_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootFile_Field_ContentArgs = {
  distinct_on?: Maybe<Array<File_Field_Content_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<File_Field_Content_Order_By>>;
  where?: Maybe<File_Field_Content_Bool_Exp>;
};


/** query root */
export type Query_RootFile_Field_Content_AggregateArgs = {
  distinct_on?: Maybe<Array<File_Field_Content_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<File_Field_Content_Order_By>>;
  where?: Maybe<File_Field_Content_Bool_Exp>;
};


/** query root */
export type Query_RootFile_Field_Content_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootMeArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootMe_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootModelsArgs = {
  distinct_on?: Maybe<Array<Models_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Models_Order_By>>;
  where?: Maybe<Models_Bool_Exp>;
};


/** query root */
export type Query_RootModels_AggregateArgs = {
  distinct_on?: Maybe<Array<Models_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Models_Order_By>>;
  where?: Maybe<Models_Bool_Exp>;
};


/** query root */
export type Query_RootModels_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootMulti_Line_FieldArgs = {
  distinct_on?: Maybe<Array<Multi_Line_Field_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Multi_Line_Field_Order_By>>;
  where?: Maybe<Multi_Line_Field_Bool_Exp>;
};


/** query root */
export type Query_RootMulti_Line_Field_AggregateArgs = {
  distinct_on?: Maybe<Array<Multi_Line_Field_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Multi_Line_Field_Order_By>>;
  where?: Maybe<Multi_Line_Field_Bool_Exp>;
};


/** query root */
export type Query_RootMulti_Line_Field_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootMulti_Line_Field_ContentArgs = {
  distinct_on?: Maybe<Array<Multi_Line_Field_Content_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Multi_Line_Field_Content_Order_By>>;
  where?: Maybe<Multi_Line_Field_Content_Bool_Exp>;
};


/** query root */
export type Query_RootMulti_Line_Field_Content_AggregateArgs = {
  distinct_on?: Maybe<Array<Multi_Line_Field_Content_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Multi_Line_Field_Content_Order_By>>;
  where?: Maybe<Multi_Line_Field_Content_Bool_Exp>;
};


/** query root */
export type Query_RootMulti_Line_Field_Content_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootProjectsArgs = {
  distinct_on?: Maybe<Array<Projects_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Projects_Order_By>>;
  where?: Maybe<Projects_Bool_Exp>;
};


/** query root */
export type Query_RootProjects_AggregateArgs = {
  distinct_on?: Maybe<Array<Projects_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Projects_Order_By>>;
  where?: Maybe<Projects_Bool_Exp>;
};


/** query root */
export type Query_RootProjects_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootRole_GrantsArgs = {
  distinct_on?: Maybe<Array<Role_Grants_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Role_Grants_Order_By>>;
  where?: Maybe<Role_Grants_Bool_Exp>;
};


/** query root */
export type Query_RootRole_Grants_AggregateArgs = {
  distinct_on?: Maybe<Array<Role_Grants_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Role_Grants_Order_By>>;
  where?: Maybe<Role_Grants_Bool_Exp>;
};


/** query root */
export type Query_RootRole_Grants_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootRolesArgs = {
  distinct_on?: Maybe<Array<Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Roles_Order_By>>;
  where?: Maybe<Roles_Bool_Exp>;
};


/** query root */
export type Query_RootRoles_AggregateArgs = {
  distinct_on?: Maybe<Array<Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Roles_Order_By>>;
  where?: Maybe<Roles_Bool_Exp>;
};


/** query root */
export type Query_RootRoles_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootSingle_Line_FieldArgs = {
  distinct_on?: Maybe<Array<Single_Line_Field_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Single_Line_Field_Order_By>>;
  where?: Maybe<Single_Line_Field_Bool_Exp>;
};


/** query root */
export type Query_RootSingle_Line_Field_AggregateArgs = {
  distinct_on?: Maybe<Array<Single_Line_Field_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Single_Line_Field_Order_By>>;
  where?: Maybe<Single_Line_Field_Bool_Exp>;
};


/** query root */
export type Query_RootSingle_Line_Field_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootSingle_Line_Field_ContentArgs = {
  distinct_on?: Maybe<Array<Single_Line_Field_Content_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Single_Line_Field_Content_Order_By>>;
  where?: Maybe<Single_Line_Field_Content_Bool_Exp>;
};


/** query root */
export type Query_RootSingle_Line_Field_Content_AggregateArgs = {
  distinct_on?: Maybe<Array<Single_Line_Field_Content_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Single_Line_Field_Content_Order_By>>;
  where?: Maybe<Single_Line_Field_Content_Bool_Exp>;
};


/** query root */
export type Query_RootSingle_Line_Field_Content_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "role_grants" */
export type Role_Grants = {
  __typename?: 'role_grants';
  grant: Scalars['grants'];
  id: Scalars['uuid'];
  /** An object relationship */
  role: Roles;
  role_id: Scalars['uuid'];
};

/** aggregated selection of "role_grants" */
export type Role_Grants_Aggregate = {
  __typename?: 'role_grants_aggregate';
  aggregate?: Maybe<Role_Grants_Aggregate_Fields>;
  nodes: Array<Role_Grants>;
};

/** aggregate fields of "role_grants" */
export type Role_Grants_Aggregate_Fields = {
  __typename?: 'role_grants_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Role_Grants_Max_Fields>;
  min?: Maybe<Role_Grants_Min_Fields>;
};


/** aggregate fields of "role_grants" */
export type Role_Grants_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Role_Grants_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "role_grants" */
export type Role_Grants_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Role_Grants_Max_Order_By>;
  min?: Maybe<Role_Grants_Min_Order_By>;
};

/** input type for inserting array relation for remote table "role_grants" */
export type Role_Grants_Arr_Rel_Insert_Input = {
  data: Array<Role_Grants_Insert_Input>;
  on_conflict?: Maybe<Role_Grants_On_Conflict>;
};

/** Boolean expression to filter rows from the table "role_grants". All fields are combined with a logical 'AND'. */
export type Role_Grants_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Role_Grants_Bool_Exp>>>;
  _not?: Maybe<Role_Grants_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Role_Grants_Bool_Exp>>>;
  grant?: Maybe<Grants_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  role?: Maybe<Roles_Bool_Exp>;
  role_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "role_grants" */
export enum Role_Grants_Constraint {
  /** unique or primary key constraint */
  RoleGrantsPkey = 'role_grants_pkey'
}

/** input type for inserting data into table "role_grants" */
export type Role_Grants_Insert_Input = {
  grant?: Maybe<Scalars['grants']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Roles_Obj_Rel_Insert_Input>;
  role_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Role_Grants_Max_Fields = {
  __typename?: 'role_grants_max_fields';
  id?: Maybe<Scalars['uuid']>;
  role_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "role_grants" */
export type Role_Grants_Max_Order_By = {
  id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Role_Grants_Min_Fields = {
  __typename?: 'role_grants_min_fields';
  id?: Maybe<Scalars['uuid']>;
  role_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "role_grants" */
export type Role_Grants_Min_Order_By = {
  id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "role_grants" */
export type Role_Grants_Mutation_Response = {
  __typename?: 'role_grants_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Role_Grants>;
};

/** input type for inserting object relation for remote table "role_grants" */
export type Role_Grants_Obj_Rel_Insert_Input = {
  data: Role_Grants_Insert_Input;
  on_conflict?: Maybe<Role_Grants_On_Conflict>;
};

/** on conflict condition type for table "role_grants" */
export type Role_Grants_On_Conflict = {
  constraint: Role_Grants_Constraint;
  update_columns: Array<Role_Grants_Update_Column>;
  where?: Maybe<Role_Grants_Bool_Exp>;
};

/** ordering options when selecting data from "role_grants" */
export type Role_Grants_Order_By = {
  grant?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  role?: Maybe<Roles_Order_By>;
  role_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "role_grants" */
export type Role_Grants_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "role_grants" */
export enum Role_Grants_Select_Column {
  /** column name */
  Grant = 'grant',
  /** column name */
  Id = 'id',
  /** column name */
  RoleId = 'role_id'
}

/** input type for updating data in table "role_grants" */
export type Role_Grants_Set_Input = {
  grant?: Maybe<Scalars['grants']>;
  id?: Maybe<Scalars['uuid']>;
  role_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "role_grants" */
export enum Role_Grants_Update_Column {
  /** column name */
  Grant = 'grant',
  /** column name */
  Id = 'id',
  /** column name */
  RoleId = 'role_id'
}

/** columns and relationships of "roles" */
export type Roles = {
  __typename?: 'roles';
  api_name: Scalars['String'];
  /** An array relationship */
  collaborators: Array<Collaborators>;
  /** An aggregated array relationship */
  collaborators_aggregate: Collaborators_Aggregate;
  display_name: Scalars['String'];
  /** An array relationship */
  grants: Array<Role_Grants>;
  /** An aggregated array relationship */
  grants_aggregate: Role_Grants_Aggregate;
  id: Scalars['uuid'];
  /** An object relationship */
  project: Projects;
  project_id: Scalars['uuid'];
};


/** columns and relationships of "roles" */
export type RolesCollaboratorsArgs = {
  distinct_on?: Maybe<Array<Collaborators_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Collaborators_Order_By>>;
  where?: Maybe<Collaborators_Bool_Exp>;
};


/** columns and relationships of "roles" */
export type RolesCollaborators_AggregateArgs = {
  distinct_on?: Maybe<Array<Collaborators_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Collaborators_Order_By>>;
  where?: Maybe<Collaborators_Bool_Exp>;
};


/** columns and relationships of "roles" */
export type RolesGrantsArgs = {
  distinct_on?: Maybe<Array<Role_Grants_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Role_Grants_Order_By>>;
  where?: Maybe<Role_Grants_Bool_Exp>;
};


/** columns and relationships of "roles" */
export type RolesGrants_AggregateArgs = {
  distinct_on?: Maybe<Array<Role_Grants_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Role_Grants_Order_By>>;
  where?: Maybe<Role_Grants_Bool_Exp>;
};

/** aggregated selection of "roles" */
export type Roles_Aggregate = {
  __typename?: 'roles_aggregate';
  aggregate?: Maybe<Roles_Aggregate_Fields>;
  nodes: Array<Roles>;
};

/** aggregate fields of "roles" */
export type Roles_Aggregate_Fields = {
  __typename?: 'roles_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Roles_Max_Fields>;
  min?: Maybe<Roles_Min_Fields>;
};


/** aggregate fields of "roles" */
export type Roles_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Roles_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "roles" */
export type Roles_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Roles_Max_Order_By>;
  min?: Maybe<Roles_Min_Order_By>;
};

/** input type for inserting array relation for remote table "roles" */
export type Roles_Arr_Rel_Insert_Input = {
  data: Array<Roles_Insert_Input>;
  on_conflict?: Maybe<Roles_On_Conflict>;
};

/** Boolean expression to filter rows from the table "roles". All fields are combined with a logical 'AND'. */
export type Roles_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Roles_Bool_Exp>>>;
  _not?: Maybe<Roles_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Roles_Bool_Exp>>>;
  api_name?: Maybe<String_Comparison_Exp>;
  collaborators?: Maybe<Collaborators_Bool_Exp>;
  display_name?: Maybe<String_Comparison_Exp>;
  grants?: Maybe<Role_Grants_Bool_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  project?: Maybe<Projects_Bool_Exp>;
  project_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "roles" */
export enum Roles_Constraint {
  /** unique or primary key constraint */
  RolesPkey = 'roles_pkey'
}

/** input type for inserting data into table "roles" */
export type Roles_Insert_Input = {
  api_name?: Maybe<Scalars['String']>;
  collaborators?: Maybe<Collaborators_Arr_Rel_Insert_Input>;
  display_name?: Maybe<Scalars['String']>;
  grants?: Maybe<Role_Grants_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['uuid']>;
  project?: Maybe<Projects_Obj_Rel_Insert_Input>;
  project_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Roles_Max_Fields = {
  __typename?: 'roles_max_fields';
  api_name?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  project_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "roles" */
export type Roles_Max_Order_By = {
  api_name?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Roles_Min_Fields = {
  __typename?: 'roles_min_fields';
  api_name?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  project_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "roles" */
export type Roles_Min_Order_By = {
  api_name?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "roles" */
export type Roles_Mutation_Response = {
  __typename?: 'roles_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Roles>;
};

/** input type for inserting object relation for remote table "roles" */
export type Roles_Obj_Rel_Insert_Input = {
  data: Roles_Insert_Input;
  on_conflict?: Maybe<Roles_On_Conflict>;
};

/** on conflict condition type for table "roles" */
export type Roles_On_Conflict = {
  constraint: Roles_Constraint;
  update_columns: Array<Roles_Update_Column>;
  where?: Maybe<Roles_Bool_Exp>;
};

/** ordering options when selecting data from "roles" */
export type Roles_Order_By = {
  api_name?: Maybe<Order_By>;
  collaborators_aggregate?: Maybe<Collaborators_Aggregate_Order_By>;
  display_name?: Maybe<Order_By>;
  grants_aggregate?: Maybe<Role_Grants_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  project?: Maybe<Projects_Order_By>;
  project_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "roles" */
export type Roles_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "roles" */
export enum Roles_Select_Column {
  /** column name */
  ApiName = 'api_name',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  Id = 'id',
  /** column name */
  ProjectId = 'project_id'
}

/** input type for updating data in table "roles" */
export type Roles_Set_Input = {
  api_name?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  project_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "roles" */
export enum Roles_Update_Column {
  /** column name */
  ApiName = 'api_name',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  Id = 'id',
  /** column name */
  ProjectId = 'project_id'
}

/** columns and relationships of "single_line_field" */
export type Single_Line_Field = {
  __typename?: 'single_line_field';
  api_name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  display_name: Scalars['String'];
  hidden: Scalars['Boolean'];
  id: Scalars['uuid'];
  /** An object relationship */
  model: Models;
  model_id: Scalars['uuid'];
  /** Somehow constrained */
  position?: Maybe<Scalars['Int']>;
  required: Scalars['Boolean'];
};

/** aggregated selection of "single_line_field" */
export type Single_Line_Field_Aggregate = {
  __typename?: 'single_line_field_aggregate';
  aggregate?: Maybe<Single_Line_Field_Aggregate_Fields>;
  nodes: Array<Single_Line_Field>;
};

/** aggregate fields of "single_line_field" */
export type Single_Line_Field_Aggregate_Fields = {
  __typename?: 'single_line_field_aggregate_fields';
  avg?: Maybe<Single_Line_Field_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Single_Line_Field_Max_Fields>;
  min?: Maybe<Single_Line_Field_Min_Fields>;
  stddev?: Maybe<Single_Line_Field_Stddev_Fields>;
  stddev_pop?: Maybe<Single_Line_Field_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Single_Line_Field_Stddev_Samp_Fields>;
  sum?: Maybe<Single_Line_Field_Sum_Fields>;
  var_pop?: Maybe<Single_Line_Field_Var_Pop_Fields>;
  var_samp?: Maybe<Single_Line_Field_Var_Samp_Fields>;
  variance?: Maybe<Single_Line_Field_Variance_Fields>;
};


/** aggregate fields of "single_line_field" */
export type Single_Line_Field_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Single_Line_Field_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "single_line_field" */
export type Single_Line_Field_Aggregate_Order_By = {
  avg?: Maybe<Single_Line_Field_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Single_Line_Field_Max_Order_By>;
  min?: Maybe<Single_Line_Field_Min_Order_By>;
  stddev?: Maybe<Single_Line_Field_Stddev_Order_By>;
  stddev_pop?: Maybe<Single_Line_Field_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Single_Line_Field_Stddev_Samp_Order_By>;
  sum?: Maybe<Single_Line_Field_Sum_Order_By>;
  var_pop?: Maybe<Single_Line_Field_Var_Pop_Order_By>;
  var_samp?: Maybe<Single_Line_Field_Var_Samp_Order_By>;
  variance?: Maybe<Single_Line_Field_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "single_line_field" */
export type Single_Line_Field_Arr_Rel_Insert_Input = {
  data: Array<Single_Line_Field_Insert_Input>;
  on_conflict?: Maybe<Single_Line_Field_On_Conflict>;
};

/** aggregate avg on columns */
export type Single_Line_Field_Avg_Fields = {
  __typename?: 'single_line_field_avg_fields';
  position?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "single_line_field" */
export type Single_Line_Field_Avg_Order_By = {
  position?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "single_line_field". All fields are combined with a logical 'AND'. */
export type Single_Line_Field_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Single_Line_Field_Bool_Exp>>>;
  _not?: Maybe<Single_Line_Field_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Single_Line_Field_Bool_Exp>>>;
  api_name?: Maybe<String_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  display_name?: Maybe<String_Comparison_Exp>;
  hidden?: Maybe<Boolean_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  model?: Maybe<Models_Bool_Exp>;
  model_id?: Maybe<Uuid_Comparison_Exp>;
  position?: Maybe<Int_Comparison_Exp>;
  required?: Maybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "single_line_field" */
export enum Single_Line_Field_Constraint {
  /** unique or primary key constraint */
  SingleLineFieldIdKey = 'single_line_field_id_key',
  /** unique or primary key constraint */
  SingleLineFieldPkey = 'single_line_field_pkey'
}

/** columns and relationships of "single_line_field_content" */
export type Single_Line_Field_Content = {
  __typename?: 'single_line_field_content';
  content?: Maybe<Scalars['String']>;
  entry_id: Scalars['uuid'];
  /** An object relationship */
  field: Single_Line_Field;
  field_id: Scalars['uuid'];
  id: Scalars['uuid'];
};

/** aggregated selection of "single_line_field_content" */
export type Single_Line_Field_Content_Aggregate = {
  __typename?: 'single_line_field_content_aggregate';
  aggregate?: Maybe<Single_Line_Field_Content_Aggregate_Fields>;
  nodes: Array<Single_Line_Field_Content>;
};

/** aggregate fields of "single_line_field_content" */
export type Single_Line_Field_Content_Aggregate_Fields = {
  __typename?: 'single_line_field_content_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Single_Line_Field_Content_Max_Fields>;
  min?: Maybe<Single_Line_Field_Content_Min_Fields>;
};


/** aggregate fields of "single_line_field_content" */
export type Single_Line_Field_Content_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Single_Line_Field_Content_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "single_line_field_content" */
export type Single_Line_Field_Content_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Single_Line_Field_Content_Max_Order_By>;
  min?: Maybe<Single_Line_Field_Content_Min_Order_By>;
};

/** input type for inserting array relation for remote table "single_line_field_content" */
export type Single_Line_Field_Content_Arr_Rel_Insert_Input = {
  data: Array<Single_Line_Field_Content_Insert_Input>;
  on_conflict?: Maybe<Single_Line_Field_Content_On_Conflict>;
};

/** Boolean expression to filter rows from the table "single_line_field_content". All fields are combined with a logical 'AND'. */
export type Single_Line_Field_Content_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Single_Line_Field_Content_Bool_Exp>>>;
  _not?: Maybe<Single_Line_Field_Content_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Single_Line_Field_Content_Bool_Exp>>>;
  content?: Maybe<String_Comparison_Exp>;
  entry_id?: Maybe<Uuid_Comparison_Exp>;
  field?: Maybe<Single_Line_Field_Bool_Exp>;
  field_id?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "single_line_field_content" */
export enum Single_Line_Field_Content_Constraint {
  /** unique or primary key constraint */
  SingleLineFieldContentIdKey = 'single_line_field_content_id_key',
  /** unique or primary key constraint */
  SingleLineFieldContentPkey = 'single_line_field_content_pkey'
}

/** input type for inserting data into table "single_line_field_content" */
export type Single_Line_Field_Content_Insert_Input = {
  content?: Maybe<Scalars['String']>;
  entry_id?: Maybe<Scalars['uuid']>;
  field?: Maybe<Single_Line_Field_Obj_Rel_Insert_Input>;
  field_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Single_Line_Field_Content_Max_Fields = {
  __typename?: 'single_line_field_content_max_fields';
  content?: Maybe<Scalars['String']>;
  entry_id?: Maybe<Scalars['uuid']>;
  field_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "single_line_field_content" */
export type Single_Line_Field_Content_Max_Order_By = {
  content?: Maybe<Order_By>;
  entry_id?: Maybe<Order_By>;
  field_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Single_Line_Field_Content_Min_Fields = {
  __typename?: 'single_line_field_content_min_fields';
  content?: Maybe<Scalars['String']>;
  entry_id?: Maybe<Scalars['uuid']>;
  field_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "single_line_field_content" */
export type Single_Line_Field_Content_Min_Order_By = {
  content?: Maybe<Order_By>;
  entry_id?: Maybe<Order_By>;
  field_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** response of any mutation on the table "single_line_field_content" */
export type Single_Line_Field_Content_Mutation_Response = {
  __typename?: 'single_line_field_content_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Single_Line_Field_Content>;
};

/** input type for inserting object relation for remote table "single_line_field_content" */
export type Single_Line_Field_Content_Obj_Rel_Insert_Input = {
  data: Single_Line_Field_Content_Insert_Input;
  on_conflict?: Maybe<Single_Line_Field_Content_On_Conflict>;
};

/** on conflict condition type for table "single_line_field_content" */
export type Single_Line_Field_Content_On_Conflict = {
  constraint: Single_Line_Field_Content_Constraint;
  update_columns: Array<Single_Line_Field_Content_Update_Column>;
  where?: Maybe<Single_Line_Field_Content_Bool_Exp>;
};

/** ordering options when selecting data from "single_line_field_content" */
export type Single_Line_Field_Content_Order_By = {
  content?: Maybe<Order_By>;
  entry_id?: Maybe<Order_By>;
  field?: Maybe<Single_Line_Field_Order_By>;
  field_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** primary key columns input for table: "single_line_field_content" */
export type Single_Line_Field_Content_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "single_line_field_content" */
export enum Single_Line_Field_Content_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  EntryId = 'entry_id',
  /** column name */
  FieldId = 'field_id',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "single_line_field_content" */
export type Single_Line_Field_Content_Set_Input = {
  content?: Maybe<Scalars['String']>;
  entry_id?: Maybe<Scalars['uuid']>;
  field_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "single_line_field_content" */
export enum Single_Line_Field_Content_Update_Column {
  /** column name */
  Content = 'content',
  /** column name */
  EntryId = 'entry_id',
  /** column name */
  FieldId = 'field_id',
  /** column name */
  Id = 'id'
}

/** input type for incrementing integer column in table "single_line_field" */
export type Single_Line_Field_Inc_Input = {
  position?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "single_line_field" */
export type Single_Line_Field_Insert_Input = {
  api_name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  hidden?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['uuid']>;
  model?: Maybe<Models_Obj_Rel_Insert_Input>;
  model_id?: Maybe<Scalars['uuid']>;
  position?: Maybe<Scalars['Int']>;
  required?: Maybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Single_Line_Field_Max_Fields = {
  __typename?: 'single_line_field_max_fields';
  api_name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  model_id?: Maybe<Scalars['uuid']>;
  position?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "single_line_field" */
export type Single_Line_Field_Max_Order_By = {
  api_name?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  model_id?: Maybe<Order_By>;
  position?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Single_Line_Field_Min_Fields = {
  __typename?: 'single_line_field_min_fields';
  api_name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  model_id?: Maybe<Scalars['uuid']>;
  position?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "single_line_field" */
export type Single_Line_Field_Min_Order_By = {
  api_name?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  model_id?: Maybe<Order_By>;
  position?: Maybe<Order_By>;
};

/** response of any mutation on the table "single_line_field" */
export type Single_Line_Field_Mutation_Response = {
  __typename?: 'single_line_field_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Single_Line_Field>;
};

/** input type for inserting object relation for remote table "single_line_field" */
export type Single_Line_Field_Obj_Rel_Insert_Input = {
  data: Single_Line_Field_Insert_Input;
  on_conflict?: Maybe<Single_Line_Field_On_Conflict>;
};

/** on conflict condition type for table "single_line_field" */
export type Single_Line_Field_On_Conflict = {
  constraint: Single_Line_Field_Constraint;
  update_columns: Array<Single_Line_Field_Update_Column>;
  where?: Maybe<Single_Line_Field_Bool_Exp>;
};

/** ordering options when selecting data from "single_line_field" */
export type Single_Line_Field_Order_By = {
  api_name?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  hidden?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  model?: Maybe<Models_Order_By>;
  model_id?: Maybe<Order_By>;
  position?: Maybe<Order_By>;
  required?: Maybe<Order_By>;
};

/** primary key columns input for table: "single_line_field" */
export type Single_Line_Field_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "single_line_field" */
export enum Single_Line_Field_Select_Column {
  /** column name */
  ApiName = 'api_name',
  /** column name */
  Description = 'description',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  Hidden = 'hidden',
  /** column name */
  Id = 'id',
  /** column name */
  ModelId = 'model_id',
  /** column name */
  Position = 'position',
  /** column name */
  Required = 'required'
}

/** input type for updating data in table "single_line_field" */
export type Single_Line_Field_Set_Input = {
  api_name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  hidden?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['uuid']>;
  model_id?: Maybe<Scalars['uuid']>;
  position?: Maybe<Scalars['Int']>;
  required?: Maybe<Scalars['Boolean']>;
};

/** aggregate stddev on columns */
export type Single_Line_Field_Stddev_Fields = {
  __typename?: 'single_line_field_stddev_fields';
  position?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "single_line_field" */
export type Single_Line_Field_Stddev_Order_By = {
  position?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Single_Line_Field_Stddev_Pop_Fields = {
  __typename?: 'single_line_field_stddev_pop_fields';
  position?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "single_line_field" */
export type Single_Line_Field_Stddev_Pop_Order_By = {
  position?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Single_Line_Field_Stddev_Samp_Fields = {
  __typename?: 'single_line_field_stddev_samp_fields';
  position?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "single_line_field" */
export type Single_Line_Field_Stddev_Samp_Order_By = {
  position?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Single_Line_Field_Sum_Fields = {
  __typename?: 'single_line_field_sum_fields';
  position?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "single_line_field" */
export type Single_Line_Field_Sum_Order_By = {
  position?: Maybe<Order_By>;
};

/** update columns of table "single_line_field" */
export enum Single_Line_Field_Update_Column {
  /** column name */
  ApiName = 'api_name',
  /** column name */
  Description = 'description',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  Hidden = 'hidden',
  /** column name */
  Id = 'id',
  /** column name */
  ModelId = 'model_id',
  /** column name */
  Position = 'position',
  /** column name */
  Required = 'required'
}

/** aggregate var_pop on columns */
export type Single_Line_Field_Var_Pop_Fields = {
  __typename?: 'single_line_field_var_pop_fields';
  position?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "single_line_field" */
export type Single_Line_Field_Var_Pop_Order_By = {
  position?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Single_Line_Field_Var_Samp_Fields = {
  __typename?: 'single_line_field_var_samp_fields';
  position?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "single_line_field" */
export type Single_Line_Field_Var_Samp_Order_By = {
  position?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Single_Line_Field_Variance_Fields = {
  __typename?: 'single_line_field_variance_fields';
  position?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "single_line_field" */
export type Single_Line_Field_Variance_Order_By = {
  position?: Maybe<Order_By>;
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "collaborators" */
  collaborators: Array<Collaborators>;
  /** fetch aggregated fields from the table: "collaborators" */
  collaborators_aggregate: Collaborators_Aggregate;
  /** fetch data from the table: "collaborators" using primary key columns */
  collaborators_by_pk?: Maybe<Collaborators>;
  /** fetch data from the table: "entries" */
  entries: Array<Entries>;
  /** fetch aggregated fields from the table: "entries" */
  entries_aggregate: Entries_Aggregate;
  /** fetch data from the table: "entries" using primary key columns */
  entries_by_pk?: Maybe<Entries>;
  /** fetch data from the table: "entry_status" */
  entry_status: Array<Entry_Status>;
  /** fetch aggregated fields from the table: "entry_status" */
  entry_status_aggregate: Entry_Status_Aggregate;
  /** fetch data from the table: "entry_status" using primary key columns */
  entry_status_by_pk?: Maybe<Entry_Status>;
  /** fetch data from the table: "file_field" */
  file_field: Array<File_Field>;
  /** fetch aggregated fields from the table: "file_field" */
  file_field_aggregate: File_Field_Aggregate;
  /** fetch data from the table: "file_field" using primary key columns */
  file_field_by_pk?: Maybe<File_Field>;
  /** fetch data from the table: "file_field_content" */
  file_field_content: Array<File_Field_Content>;
  /** fetch aggregated fields from the table: "file_field_content" */
  file_field_content_aggregate: File_Field_Content_Aggregate;
  /** fetch data from the table: "file_field_content" using primary key columns */
  file_field_content_by_pk?: Maybe<File_Field_Content>;
  /** execute function "me" which returns "users" */
  me: Array<Users>;
  /** execute function "me" and query aggregates on result of table type "users" */
  me_aggregate: Users_Aggregate;
  /** fetch data from the table: "models" */
  models: Array<Models>;
  /** fetch aggregated fields from the table: "models" */
  models_aggregate: Models_Aggregate;
  /** fetch data from the table: "models" using primary key columns */
  models_by_pk?: Maybe<Models>;
  /** fetch data from the table: "multi_line_field" */
  multi_line_field: Array<Multi_Line_Field>;
  /** fetch aggregated fields from the table: "multi_line_field" */
  multi_line_field_aggregate: Multi_Line_Field_Aggregate;
  /** fetch data from the table: "multi_line_field" using primary key columns */
  multi_line_field_by_pk?: Maybe<Multi_Line_Field>;
  /** fetch data from the table: "multi_line_field_content" */
  multi_line_field_content: Array<Multi_Line_Field_Content>;
  /** fetch aggregated fields from the table: "multi_line_field_content" */
  multi_line_field_content_aggregate: Multi_Line_Field_Content_Aggregate;
  /** fetch data from the table: "multi_line_field_content" using primary key columns */
  multi_line_field_content_by_pk?: Maybe<Multi_Line_Field_Content>;
  /** fetch data from the table: "projects" */
  projects: Array<Projects>;
  /** fetch aggregated fields from the table: "projects" */
  projects_aggregate: Projects_Aggregate;
  /** fetch data from the table: "projects" using primary key columns */
  projects_by_pk?: Maybe<Projects>;
  /** fetch data from the table: "role_grants" */
  role_grants: Array<Role_Grants>;
  /** fetch aggregated fields from the table: "role_grants" */
  role_grants_aggregate: Role_Grants_Aggregate;
  /** fetch data from the table: "role_grants" using primary key columns */
  role_grants_by_pk?: Maybe<Role_Grants>;
  /** fetch data from the table: "roles" */
  roles: Array<Roles>;
  /** fetch aggregated fields from the table: "roles" */
  roles_aggregate: Roles_Aggregate;
  /** fetch data from the table: "roles" using primary key columns */
  roles_by_pk?: Maybe<Roles>;
  /** fetch data from the table: "single_line_field" */
  single_line_field: Array<Single_Line_Field>;
  /** fetch aggregated fields from the table: "single_line_field" */
  single_line_field_aggregate: Single_Line_Field_Aggregate;
  /** fetch data from the table: "single_line_field" using primary key columns */
  single_line_field_by_pk?: Maybe<Single_Line_Field>;
  /** fetch data from the table: "single_line_field_content" */
  single_line_field_content: Array<Single_Line_Field_Content>;
  /** fetch aggregated fields from the table: "single_line_field_content" */
  single_line_field_content_aggregate: Single_Line_Field_Content_Aggregate;
  /** fetch data from the table: "single_line_field_content" using primary key columns */
  single_line_field_content_by_pk?: Maybe<Single_Line_Field_Content>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


/** subscription root */
export type Subscription_RootCollaboratorsArgs = {
  distinct_on?: Maybe<Array<Collaborators_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Collaborators_Order_By>>;
  where?: Maybe<Collaborators_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCollaborators_AggregateArgs = {
  distinct_on?: Maybe<Array<Collaborators_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Collaborators_Order_By>>;
  where?: Maybe<Collaborators_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCollaborators_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootEntriesArgs = {
  distinct_on?: Maybe<Array<Entries_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Entries_Order_By>>;
  where?: Maybe<Entries_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootEntries_AggregateArgs = {
  distinct_on?: Maybe<Array<Entries_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Entries_Order_By>>;
  where?: Maybe<Entries_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootEntries_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootEntry_StatusArgs = {
  distinct_on?: Maybe<Array<Entry_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Entry_Status_Order_By>>;
  where?: Maybe<Entry_Status_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootEntry_Status_AggregateArgs = {
  distinct_on?: Maybe<Array<Entry_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Entry_Status_Order_By>>;
  where?: Maybe<Entry_Status_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootEntry_Status_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootFile_FieldArgs = {
  distinct_on?: Maybe<Array<File_Field_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<File_Field_Order_By>>;
  where?: Maybe<File_Field_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFile_Field_AggregateArgs = {
  distinct_on?: Maybe<Array<File_Field_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<File_Field_Order_By>>;
  where?: Maybe<File_Field_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFile_Field_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootFile_Field_ContentArgs = {
  distinct_on?: Maybe<Array<File_Field_Content_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<File_Field_Content_Order_By>>;
  where?: Maybe<File_Field_Content_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFile_Field_Content_AggregateArgs = {
  distinct_on?: Maybe<Array<File_Field_Content_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<File_Field_Content_Order_By>>;
  where?: Maybe<File_Field_Content_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFile_Field_Content_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootMeArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMe_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootModelsArgs = {
  distinct_on?: Maybe<Array<Models_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Models_Order_By>>;
  where?: Maybe<Models_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootModels_AggregateArgs = {
  distinct_on?: Maybe<Array<Models_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Models_Order_By>>;
  where?: Maybe<Models_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootModels_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootMulti_Line_FieldArgs = {
  distinct_on?: Maybe<Array<Multi_Line_Field_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Multi_Line_Field_Order_By>>;
  where?: Maybe<Multi_Line_Field_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMulti_Line_Field_AggregateArgs = {
  distinct_on?: Maybe<Array<Multi_Line_Field_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Multi_Line_Field_Order_By>>;
  where?: Maybe<Multi_Line_Field_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMulti_Line_Field_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootMulti_Line_Field_ContentArgs = {
  distinct_on?: Maybe<Array<Multi_Line_Field_Content_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Multi_Line_Field_Content_Order_By>>;
  where?: Maybe<Multi_Line_Field_Content_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMulti_Line_Field_Content_AggregateArgs = {
  distinct_on?: Maybe<Array<Multi_Line_Field_Content_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Multi_Line_Field_Content_Order_By>>;
  where?: Maybe<Multi_Line_Field_Content_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMulti_Line_Field_Content_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootProjectsArgs = {
  distinct_on?: Maybe<Array<Projects_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Projects_Order_By>>;
  where?: Maybe<Projects_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProjects_AggregateArgs = {
  distinct_on?: Maybe<Array<Projects_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Projects_Order_By>>;
  where?: Maybe<Projects_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProjects_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootRole_GrantsArgs = {
  distinct_on?: Maybe<Array<Role_Grants_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Role_Grants_Order_By>>;
  where?: Maybe<Role_Grants_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRole_Grants_AggregateArgs = {
  distinct_on?: Maybe<Array<Role_Grants_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Role_Grants_Order_By>>;
  where?: Maybe<Role_Grants_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRole_Grants_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootRolesArgs = {
  distinct_on?: Maybe<Array<Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Roles_Order_By>>;
  where?: Maybe<Roles_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRoles_AggregateArgs = {
  distinct_on?: Maybe<Array<Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Roles_Order_By>>;
  where?: Maybe<Roles_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRoles_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootSingle_Line_FieldArgs = {
  distinct_on?: Maybe<Array<Single_Line_Field_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Single_Line_Field_Order_By>>;
  where?: Maybe<Single_Line_Field_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSingle_Line_Field_AggregateArgs = {
  distinct_on?: Maybe<Array<Single_Line_Field_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Single_Line_Field_Order_By>>;
  where?: Maybe<Single_Line_Field_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSingle_Line_Field_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootSingle_Line_Field_ContentArgs = {
  distinct_on?: Maybe<Array<Single_Line_Field_Content_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Single_Line_Field_Content_Order_By>>;
  where?: Maybe<Single_Line_Field_Content_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSingle_Line_Field_Content_AggregateArgs = {
  distinct_on?: Maybe<Array<Single_Line_Field_Content_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Single_Line_Field_Content_Order_By>>;
  where?: Maybe<Single_Line_Field_Content_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSingle_Line_Field_Content_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};


/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  /** An array relationship */
  collaborator_in: Array<Collaborators>;
  /** An aggregated array relationship */
  collaborator_in_aggregate: Collaborators_Aggregate;
  email: Scalars['String'];
  first_name: Scalars['String'];
  id: Scalars['uuid'];
  last_name: Scalars['String'];
  /** An array relationship */
  owned_projects: Array<Projects>;
  /** An aggregated array relationship */
  owned_projects_aggregate: Projects_Aggregate;
};


/** columns and relationships of "users" */
export type UsersCollaborator_InArgs = {
  distinct_on?: Maybe<Array<Collaborators_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Collaborators_Order_By>>;
  where?: Maybe<Collaborators_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersCollaborator_In_AggregateArgs = {
  distinct_on?: Maybe<Array<Collaborators_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Collaborators_Order_By>>;
  where?: Maybe<Collaborators_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersOwned_ProjectsArgs = {
  distinct_on?: Maybe<Array<Projects_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Projects_Order_By>>;
  where?: Maybe<Projects_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersOwned_Projects_AggregateArgs = {
  distinct_on?: Maybe<Array<Projects_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Projects_Order_By>>;
  where?: Maybe<Projects_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Users_Max_Order_By>;
  min?: Maybe<Users_Min_Order_By>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  collaborator_in?: Maybe<Collaborators_Bool_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  first_name?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  last_name?: Maybe<String_Comparison_Exp>;
  owned_projects?: Maybe<Projects_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  collaborator_in?: Maybe<Collaborators_Arr_Rel_Insert_Input>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
  owned_projects?: Maybe<Projects_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  email?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  email?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** ordering options when selecting data from "users" */
export type Users_Order_By = {
  collaborator_in_aggregate?: Maybe<Collaborators_Aggregate_Order_By>;
  email?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  owned_projects_aggregate?: Maybe<Projects_Aggregate_Order_By>;
};

/** primary key columns input for table: "users" */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name'
}


/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type CreateUserMutationVariables = Exact<{
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
}>;


export type CreateUserMutation = (
  { __typename?: 'mutation_root' }
  & { insert_users_one?: Maybe<(
    { __typename?: 'users' }
    & Pick<Users, 'id'>
  )> }
);

export type GetUserQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetUserQuery = (
  { __typename?: 'query_root' }
  & { users_by_pk?: Maybe<(
    { __typename?: 'users' }
    & Pick<Users, 'id' | 'first_name' | 'last_name' | 'email'>
  )> }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'query_root' }
  & { me: Array<(
    { __typename?: 'users' }
    & Pick<Users, 'id' | 'first_name' | 'last_name' | 'email'>
  )> }
);



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean_comparison_exp: Boolean_Comparison_Exp;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Int_comparison_exp: Int_Comparison_Exp;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  LoginOutput: ResolverTypeWrapper<LoginOutput>;
  String: ResolverTypeWrapper<Scalars['String']>;
  RegisterOutput: ResolverTypeWrapper<RegisterOutput>;
  String_comparison_exp: String_Comparison_Exp;
  collaborators: ResolverTypeWrapper<Collaborators>;
  collaborators_aggregate: ResolverTypeWrapper<Collaborators_Aggregate>;
  collaborators_aggregate_fields: ResolverTypeWrapper<Collaborators_Aggregate_Fields>;
  collaborators_aggregate_order_by: Collaborators_Aggregate_Order_By;
  collaborators_arr_rel_insert_input: Collaborators_Arr_Rel_Insert_Input;
  collaborators_bool_exp: Collaborators_Bool_Exp;
  collaborators_constraint: Collaborators_Constraint;
  collaborators_insert_input: Collaborators_Insert_Input;
  collaborators_max_fields: ResolverTypeWrapper<Collaborators_Max_Fields>;
  collaborators_max_order_by: Collaborators_Max_Order_By;
  collaborators_min_fields: ResolverTypeWrapper<Collaborators_Min_Fields>;
  collaborators_min_order_by: Collaborators_Min_Order_By;
  collaborators_mutation_response: ResolverTypeWrapper<Collaborators_Mutation_Response>;
  collaborators_obj_rel_insert_input: Collaborators_Obj_Rel_Insert_Input;
  collaborators_on_conflict: Collaborators_On_Conflict;
  collaborators_order_by: Collaborators_Order_By;
  collaborators_pk_columns_input: Collaborators_Pk_Columns_Input;
  collaborators_select_column: Collaborators_Select_Column;
  collaborators_set_input: Collaborators_Set_Input;
  collaborators_update_column: Collaborators_Update_Column;
  entries: ResolverTypeWrapper<Entries>;
  entries_aggregate: ResolverTypeWrapper<Entries_Aggregate>;
  entries_aggregate_fields: ResolverTypeWrapper<Entries_Aggregate_Fields>;
  entries_aggregate_order_by: Entries_Aggregate_Order_By;
  entries_arr_rel_insert_input: Entries_Arr_Rel_Insert_Input;
  entries_bool_exp: Entries_Bool_Exp;
  entries_constraint: Entries_Constraint;
  entries_insert_input: Entries_Insert_Input;
  entries_max_fields: ResolverTypeWrapper<Entries_Max_Fields>;
  entries_max_order_by: Entries_Max_Order_By;
  entries_min_fields: ResolverTypeWrapper<Entries_Min_Fields>;
  entries_min_order_by: Entries_Min_Order_By;
  entries_mutation_response: ResolverTypeWrapper<Entries_Mutation_Response>;
  entries_obj_rel_insert_input: Entries_Obj_Rel_Insert_Input;
  entries_on_conflict: Entries_On_Conflict;
  entries_order_by: Entries_Order_By;
  entries_pk_columns_input: Entries_Pk_Columns_Input;
  entries_select_column: Entries_Select_Column;
  entries_set_input: Entries_Set_Input;
  entries_update_column: Entries_Update_Column;
  entry_status: ResolverTypeWrapper<Entry_Status>;
  entry_status_aggregate: ResolverTypeWrapper<Entry_Status_Aggregate>;
  entry_status_aggregate_fields: ResolverTypeWrapper<Entry_Status_Aggregate_Fields>;
  entry_status_aggregate_order_by: Entry_Status_Aggregate_Order_By;
  entry_status_arr_rel_insert_input: Entry_Status_Arr_Rel_Insert_Input;
  entry_status_bool_exp: Entry_Status_Bool_Exp;
  entry_status_constraint: Entry_Status_Constraint;
  entry_status_insert_input: Entry_Status_Insert_Input;
  entry_status_max_fields: ResolverTypeWrapper<Entry_Status_Max_Fields>;
  entry_status_max_order_by: Entry_Status_Max_Order_By;
  entry_status_min_fields: ResolverTypeWrapper<Entry_Status_Min_Fields>;
  entry_status_min_order_by: Entry_Status_Min_Order_By;
  entry_status_mutation_response: ResolverTypeWrapper<Entry_Status_Mutation_Response>;
  entry_status_obj_rel_insert_input: Entry_Status_Obj_Rel_Insert_Input;
  entry_status_on_conflict: Entry_Status_On_Conflict;
  entry_status_order_by: Entry_Status_Order_By;
  entry_status_pk_columns_input: Entry_Status_Pk_Columns_Input;
  entry_status_select_column: Entry_Status_Select_Column;
  entry_status_set_input: Entry_Status_Set_Input;
  entry_status_update_column: Entry_Status_Update_Column;
  file_field: ResolverTypeWrapper<File_Field>;
  file_field_aggregate: ResolverTypeWrapper<File_Field_Aggregate>;
  file_field_aggregate_fields: ResolverTypeWrapper<File_Field_Aggregate_Fields>;
  file_field_aggregate_order_by: File_Field_Aggregate_Order_By;
  file_field_arr_rel_insert_input: File_Field_Arr_Rel_Insert_Input;
  file_field_avg_fields: ResolverTypeWrapper<File_Field_Avg_Fields>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  file_field_avg_order_by: File_Field_Avg_Order_By;
  file_field_bool_exp: File_Field_Bool_Exp;
  file_field_constraint: File_Field_Constraint;
  file_field_content: ResolverTypeWrapper<File_Field_Content>;
  file_field_content_aggregate: ResolverTypeWrapper<File_Field_Content_Aggregate>;
  file_field_content_aggregate_fields: ResolverTypeWrapper<File_Field_Content_Aggregate_Fields>;
  file_field_content_aggregate_order_by: File_Field_Content_Aggregate_Order_By;
  file_field_content_arr_rel_insert_input: File_Field_Content_Arr_Rel_Insert_Input;
  file_field_content_avg_fields: ResolverTypeWrapper<File_Field_Content_Avg_Fields>;
  file_field_content_avg_order_by: File_Field_Content_Avg_Order_By;
  file_field_content_bool_exp: File_Field_Content_Bool_Exp;
  file_field_content_constraint: File_Field_Content_Constraint;
  file_field_content_inc_input: File_Field_Content_Inc_Input;
  file_field_content_insert_input: File_Field_Content_Insert_Input;
  file_field_content_max_fields: ResolverTypeWrapper<File_Field_Content_Max_Fields>;
  file_field_content_max_order_by: File_Field_Content_Max_Order_By;
  file_field_content_min_fields: ResolverTypeWrapper<File_Field_Content_Min_Fields>;
  file_field_content_min_order_by: File_Field_Content_Min_Order_By;
  file_field_content_mutation_response: ResolverTypeWrapper<File_Field_Content_Mutation_Response>;
  file_field_content_obj_rel_insert_input: File_Field_Content_Obj_Rel_Insert_Input;
  file_field_content_on_conflict: File_Field_Content_On_Conflict;
  file_field_content_order_by: File_Field_Content_Order_By;
  file_field_content_pk_columns_input: File_Field_Content_Pk_Columns_Input;
  file_field_content_select_column: File_Field_Content_Select_Column;
  file_field_content_set_input: File_Field_Content_Set_Input;
  file_field_content_stddev_fields: ResolverTypeWrapper<File_Field_Content_Stddev_Fields>;
  file_field_content_stddev_order_by: File_Field_Content_Stddev_Order_By;
  file_field_content_stddev_pop_fields: ResolverTypeWrapper<File_Field_Content_Stddev_Pop_Fields>;
  file_field_content_stddev_pop_order_by: File_Field_Content_Stddev_Pop_Order_By;
  file_field_content_stddev_samp_fields: ResolverTypeWrapper<File_Field_Content_Stddev_Samp_Fields>;
  file_field_content_stddev_samp_order_by: File_Field_Content_Stddev_Samp_Order_By;
  file_field_content_sum_fields: ResolverTypeWrapper<File_Field_Content_Sum_Fields>;
  file_field_content_sum_order_by: File_Field_Content_Sum_Order_By;
  file_field_content_update_column: File_Field_Content_Update_Column;
  file_field_content_var_pop_fields: ResolverTypeWrapper<File_Field_Content_Var_Pop_Fields>;
  file_field_content_var_pop_order_by: File_Field_Content_Var_Pop_Order_By;
  file_field_content_var_samp_fields: ResolverTypeWrapper<File_Field_Content_Var_Samp_Fields>;
  file_field_content_var_samp_order_by: File_Field_Content_Var_Samp_Order_By;
  file_field_content_variance_fields: ResolverTypeWrapper<File_Field_Content_Variance_Fields>;
  file_field_content_variance_order_by: File_Field_Content_Variance_Order_By;
  file_field_inc_input: File_Field_Inc_Input;
  file_field_insert_input: File_Field_Insert_Input;
  file_field_max_fields: ResolverTypeWrapper<File_Field_Max_Fields>;
  file_field_max_order_by: File_Field_Max_Order_By;
  file_field_min_fields: ResolverTypeWrapper<File_Field_Min_Fields>;
  file_field_min_order_by: File_Field_Min_Order_By;
  file_field_mutation_response: ResolverTypeWrapper<File_Field_Mutation_Response>;
  file_field_obj_rel_insert_input: File_Field_Obj_Rel_Insert_Input;
  file_field_on_conflict: File_Field_On_Conflict;
  file_field_order_by: File_Field_Order_By;
  file_field_pk_columns_input: File_Field_Pk_Columns_Input;
  file_field_select_column: File_Field_Select_Column;
  file_field_set_input: File_Field_Set_Input;
  file_field_stddev_fields: ResolverTypeWrapper<File_Field_Stddev_Fields>;
  file_field_stddev_order_by: File_Field_Stddev_Order_By;
  file_field_stddev_pop_fields: ResolverTypeWrapper<File_Field_Stddev_Pop_Fields>;
  file_field_stddev_pop_order_by: File_Field_Stddev_Pop_Order_By;
  file_field_stddev_samp_fields: ResolverTypeWrapper<File_Field_Stddev_Samp_Fields>;
  file_field_stddev_samp_order_by: File_Field_Stddev_Samp_Order_By;
  file_field_sum_fields: ResolverTypeWrapper<File_Field_Sum_Fields>;
  file_field_sum_order_by: File_Field_Sum_Order_By;
  file_field_update_column: File_Field_Update_Column;
  file_field_var_pop_fields: ResolverTypeWrapper<File_Field_Var_Pop_Fields>;
  file_field_var_pop_order_by: File_Field_Var_Pop_Order_By;
  file_field_var_samp_fields: ResolverTypeWrapper<File_Field_Var_Samp_Fields>;
  file_field_var_samp_order_by: File_Field_Var_Samp_Order_By;
  file_field_variance_fields: ResolverTypeWrapper<File_Field_Variance_Fields>;
  file_field_variance_order_by: File_Field_Variance_Order_By;
  float8: ResolverTypeWrapper<Scalars['float8']>;
  float8_comparison_exp: Float8_Comparison_Exp;
  grants: ResolverTypeWrapper<Scalars['grants']>;
  grants_comparison_exp: Grants_Comparison_Exp;
  json: ResolverTypeWrapper<Scalars['json']>;
  json_comparison_exp: Json_Comparison_Exp;
  mime_types: ResolverTypeWrapper<Scalars['mime_types']>;
  mime_types_comparison_exp: Mime_Types_Comparison_Exp;
  models: ResolverTypeWrapper<Models>;
  models_aggregate: ResolverTypeWrapper<Models_Aggregate>;
  models_aggregate_fields: ResolverTypeWrapper<Models_Aggregate_Fields>;
  models_aggregate_order_by: Models_Aggregate_Order_By;
  models_arr_rel_insert_input: Models_Arr_Rel_Insert_Input;
  models_bool_exp: Models_Bool_Exp;
  models_constraint: Models_Constraint;
  models_insert_input: Models_Insert_Input;
  models_max_fields: ResolverTypeWrapper<Models_Max_Fields>;
  models_max_order_by: Models_Max_Order_By;
  models_min_fields: ResolverTypeWrapper<Models_Min_Fields>;
  models_min_order_by: Models_Min_Order_By;
  models_mutation_response: ResolverTypeWrapper<Models_Mutation_Response>;
  models_obj_rel_insert_input: Models_Obj_Rel_Insert_Input;
  models_on_conflict: Models_On_Conflict;
  models_order_by: Models_Order_By;
  models_pk_columns_input: Models_Pk_Columns_Input;
  models_select_column: Models_Select_Column;
  models_set_input: Models_Set_Input;
  models_update_column: Models_Update_Column;
  multi_line_field: ResolverTypeWrapper<Multi_Line_Field>;
  multi_line_field_aggregate: ResolverTypeWrapper<Multi_Line_Field_Aggregate>;
  multi_line_field_aggregate_fields: ResolverTypeWrapper<Multi_Line_Field_Aggregate_Fields>;
  multi_line_field_aggregate_order_by: Multi_Line_Field_Aggregate_Order_By;
  multi_line_field_arr_rel_insert_input: Multi_Line_Field_Arr_Rel_Insert_Input;
  multi_line_field_avg_fields: ResolverTypeWrapper<Multi_Line_Field_Avg_Fields>;
  multi_line_field_avg_order_by: Multi_Line_Field_Avg_Order_By;
  multi_line_field_bool_exp: Multi_Line_Field_Bool_Exp;
  multi_line_field_constraint: Multi_Line_Field_Constraint;
  multi_line_field_content: ResolverTypeWrapper<Multi_Line_Field_Content>;
  multi_line_field_content_aggregate: ResolverTypeWrapper<Multi_Line_Field_Content_Aggregate>;
  multi_line_field_content_aggregate_fields: ResolverTypeWrapper<Multi_Line_Field_Content_Aggregate_Fields>;
  multi_line_field_content_aggregate_order_by: Multi_Line_Field_Content_Aggregate_Order_By;
  multi_line_field_content_arr_rel_insert_input: Multi_Line_Field_Content_Arr_Rel_Insert_Input;
  multi_line_field_content_bool_exp: Multi_Line_Field_Content_Bool_Exp;
  multi_line_field_content_constraint: Multi_Line_Field_Content_Constraint;
  multi_line_field_content_insert_input: Multi_Line_Field_Content_Insert_Input;
  multi_line_field_content_max_fields: ResolverTypeWrapper<Multi_Line_Field_Content_Max_Fields>;
  multi_line_field_content_max_order_by: Multi_Line_Field_Content_Max_Order_By;
  multi_line_field_content_min_fields: ResolverTypeWrapper<Multi_Line_Field_Content_Min_Fields>;
  multi_line_field_content_min_order_by: Multi_Line_Field_Content_Min_Order_By;
  multi_line_field_content_mutation_response: ResolverTypeWrapper<Multi_Line_Field_Content_Mutation_Response>;
  multi_line_field_content_obj_rel_insert_input: Multi_Line_Field_Content_Obj_Rel_Insert_Input;
  multi_line_field_content_on_conflict: Multi_Line_Field_Content_On_Conflict;
  multi_line_field_content_order_by: Multi_Line_Field_Content_Order_By;
  multi_line_field_content_pk_columns_input: Multi_Line_Field_Content_Pk_Columns_Input;
  multi_line_field_content_select_column: Multi_Line_Field_Content_Select_Column;
  multi_line_field_content_set_input: Multi_Line_Field_Content_Set_Input;
  multi_line_field_content_update_column: Multi_Line_Field_Content_Update_Column;
  multi_line_field_inc_input: Multi_Line_Field_Inc_Input;
  multi_line_field_insert_input: Multi_Line_Field_Insert_Input;
  multi_line_field_max_fields: ResolverTypeWrapper<Multi_Line_Field_Max_Fields>;
  multi_line_field_max_order_by: Multi_Line_Field_Max_Order_By;
  multi_line_field_min_fields: ResolverTypeWrapper<Multi_Line_Field_Min_Fields>;
  multi_line_field_min_order_by: Multi_Line_Field_Min_Order_By;
  multi_line_field_mutation_response: ResolverTypeWrapper<Multi_Line_Field_Mutation_Response>;
  multi_line_field_obj_rel_insert_input: Multi_Line_Field_Obj_Rel_Insert_Input;
  multi_line_field_on_conflict: Multi_Line_Field_On_Conflict;
  multi_line_field_order_by: Multi_Line_Field_Order_By;
  multi_line_field_pk_columns_input: Multi_Line_Field_Pk_Columns_Input;
  multi_line_field_select_column: Multi_Line_Field_Select_Column;
  multi_line_field_set_input: Multi_Line_Field_Set_Input;
  multi_line_field_stddev_fields: ResolverTypeWrapper<Multi_Line_Field_Stddev_Fields>;
  multi_line_field_stddev_order_by: Multi_Line_Field_Stddev_Order_By;
  multi_line_field_stddev_pop_fields: ResolverTypeWrapper<Multi_Line_Field_Stddev_Pop_Fields>;
  multi_line_field_stddev_pop_order_by: Multi_Line_Field_Stddev_Pop_Order_By;
  multi_line_field_stddev_samp_fields: ResolverTypeWrapper<Multi_Line_Field_Stddev_Samp_Fields>;
  multi_line_field_stddev_samp_order_by: Multi_Line_Field_Stddev_Samp_Order_By;
  multi_line_field_sum_fields: ResolverTypeWrapper<Multi_Line_Field_Sum_Fields>;
  multi_line_field_sum_order_by: Multi_Line_Field_Sum_Order_By;
  multi_line_field_update_column: Multi_Line_Field_Update_Column;
  multi_line_field_var_pop_fields: ResolverTypeWrapper<Multi_Line_Field_Var_Pop_Fields>;
  multi_line_field_var_pop_order_by: Multi_Line_Field_Var_Pop_Order_By;
  multi_line_field_var_samp_fields: ResolverTypeWrapper<Multi_Line_Field_Var_Samp_Fields>;
  multi_line_field_var_samp_order_by: Multi_Line_Field_Var_Samp_Order_By;
  multi_line_field_variance_fields: ResolverTypeWrapper<Multi_Line_Field_Variance_Fields>;
  multi_line_field_variance_order_by: Multi_Line_Field_Variance_Order_By;
  mutation_root: ResolverTypeWrapper<{}>;
  order_by: Order_By;
  projects: ResolverTypeWrapper<Projects>;
  projects_aggregate: ResolverTypeWrapper<Projects_Aggregate>;
  projects_aggregate_fields: ResolverTypeWrapper<Projects_Aggregate_Fields>;
  projects_aggregate_order_by: Projects_Aggregate_Order_By;
  projects_arr_rel_insert_input: Projects_Arr_Rel_Insert_Input;
  projects_bool_exp: Projects_Bool_Exp;
  projects_constraint: Projects_Constraint;
  projects_insert_input: Projects_Insert_Input;
  projects_max_fields: ResolverTypeWrapper<Projects_Max_Fields>;
  projects_max_order_by: Projects_Max_Order_By;
  projects_min_fields: ResolverTypeWrapper<Projects_Min_Fields>;
  projects_min_order_by: Projects_Min_Order_By;
  projects_mutation_response: ResolverTypeWrapper<Projects_Mutation_Response>;
  projects_obj_rel_insert_input: Projects_Obj_Rel_Insert_Input;
  projects_on_conflict: Projects_On_Conflict;
  projects_order_by: Projects_Order_By;
  projects_pk_columns_input: Projects_Pk_Columns_Input;
  projects_select_column: Projects_Select_Column;
  projects_set_input: Projects_Set_Input;
  projects_update_column: Projects_Update_Column;
  query_root: ResolverTypeWrapper<{}>;
  role_grants: ResolverTypeWrapper<Role_Grants>;
  role_grants_aggregate: ResolverTypeWrapper<Role_Grants_Aggregate>;
  role_grants_aggregate_fields: ResolverTypeWrapper<Role_Grants_Aggregate_Fields>;
  role_grants_aggregate_order_by: Role_Grants_Aggregate_Order_By;
  role_grants_arr_rel_insert_input: Role_Grants_Arr_Rel_Insert_Input;
  role_grants_bool_exp: Role_Grants_Bool_Exp;
  role_grants_constraint: Role_Grants_Constraint;
  role_grants_insert_input: Role_Grants_Insert_Input;
  role_grants_max_fields: ResolverTypeWrapper<Role_Grants_Max_Fields>;
  role_grants_max_order_by: Role_Grants_Max_Order_By;
  role_grants_min_fields: ResolverTypeWrapper<Role_Grants_Min_Fields>;
  role_grants_min_order_by: Role_Grants_Min_Order_By;
  role_grants_mutation_response: ResolverTypeWrapper<Role_Grants_Mutation_Response>;
  role_grants_obj_rel_insert_input: Role_Grants_Obj_Rel_Insert_Input;
  role_grants_on_conflict: Role_Grants_On_Conflict;
  role_grants_order_by: Role_Grants_Order_By;
  role_grants_pk_columns_input: Role_Grants_Pk_Columns_Input;
  role_grants_select_column: Role_Grants_Select_Column;
  role_grants_set_input: Role_Grants_Set_Input;
  role_grants_update_column: Role_Grants_Update_Column;
  roles: ResolverTypeWrapper<Roles>;
  roles_aggregate: ResolverTypeWrapper<Roles_Aggregate>;
  roles_aggregate_fields: ResolverTypeWrapper<Roles_Aggregate_Fields>;
  roles_aggregate_order_by: Roles_Aggregate_Order_By;
  roles_arr_rel_insert_input: Roles_Arr_Rel_Insert_Input;
  roles_bool_exp: Roles_Bool_Exp;
  roles_constraint: Roles_Constraint;
  roles_insert_input: Roles_Insert_Input;
  roles_max_fields: ResolverTypeWrapper<Roles_Max_Fields>;
  roles_max_order_by: Roles_Max_Order_By;
  roles_min_fields: ResolverTypeWrapper<Roles_Min_Fields>;
  roles_min_order_by: Roles_Min_Order_By;
  roles_mutation_response: ResolverTypeWrapper<Roles_Mutation_Response>;
  roles_obj_rel_insert_input: Roles_Obj_Rel_Insert_Input;
  roles_on_conflict: Roles_On_Conflict;
  roles_order_by: Roles_Order_By;
  roles_pk_columns_input: Roles_Pk_Columns_Input;
  roles_select_column: Roles_Select_Column;
  roles_set_input: Roles_Set_Input;
  roles_update_column: Roles_Update_Column;
  single_line_field: ResolverTypeWrapper<Single_Line_Field>;
  single_line_field_aggregate: ResolverTypeWrapper<Single_Line_Field_Aggregate>;
  single_line_field_aggregate_fields: ResolverTypeWrapper<Single_Line_Field_Aggregate_Fields>;
  single_line_field_aggregate_order_by: Single_Line_Field_Aggregate_Order_By;
  single_line_field_arr_rel_insert_input: Single_Line_Field_Arr_Rel_Insert_Input;
  single_line_field_avg_fields: ResolverTypeWrapper<Single_Line_Field_Avg_Fields>;
  single_line_field_avg_order_by: Single_Line_Field_Avg_Order_By;
  single_line_field_bool_exp: Single_Line_Field_Bool_Exp;
  single_line_field_constraint: Single_Line_Field_Constraint;
  single_line_field_content: ResolverTypeWrapper<Single_Line_Field_Content>;
  single_line_field_content_aggregate: ResolverTypeWrapper<Single_Line_Field_Content_Aggregate>;
  single_line_field_content_aggregate_fields: ResolverTypeWrapper<Single_Line_Field_Content_Aggregate_Fields>;
  single_line_field_content_aggregate_order_by: Single_Line_Field_Content_Aggregate_Order_By;
  single_line_field_content_arr_rel_insert_input: Single_Line_Field_Content_Arr_Rel_Insert_Input;
  single_line_field_content_bool_exp: Single_Line_Field_Content_Bool_Exp;
  single_line_field_content_constraint: Single_Line_Field_Content_Constraint;
  single_line_field_content_insert_input: Single_Line_Field_Content_Insert_Input;
  single_line_field_content_max_fields: ResolverTypeWrapper<Single_Line_Field_Content_Max_Fields>;
  single_line_field_content_max_order_by: Single_Line_Field_Content_Max_Order_By;
  single_line_field_content_min_fields: ResolverTypeWrapper<Single_Line_Field_Content_Min_Fields>;
  single_line_field_content_min_order_by: Single_Line_Field_Content_Min_Order_By;
  single_line_field_content_mutation_response: ResolverTypeWrapper<Single_Line_Field_Content_Mutation_Response>;
  single_line_field_content_obj_rel_insert_input: Single_Line_Field_Content_Obj_Rel_Insert_Input;
  single_line_field_content_on_conflict: Single_Line_Field_Content_On_Conflict;
  single_line_field_content_order_by: Single_Line_Field_Content_Order_By;
  single_line_field_content_pk_columns_input: Single_Line_Field_Content_Pk_Columns_Input;
  single_line_field_content_select_column: Single_Line_Field_Content_Select_Column;
  single_line_field_content_set_input: Single_Line_Field_Content_Set_Input;
  single_line_field_content_update_column: Single_Line_Field_Content_Update_Column;
  single_line_field_inc_input: Single_Line_Field_Inc_Input;
  single_line_field_insert_input: Single_Line_Field_Insert_Input;
  single_line_field_max_fields: ResolverTypeWrapper<Single_Line_Field_Max_Fields>;
  single_line_field_max_order_by: Single_Line_Field_Max_Order_By;
  single_line_field_min_fields: ResolverTypeWrapper<Single_Line_Field_Min_Fields>;
  single_line_field_min_order_by: Single_Line_Field_Min_Order_By;
  single_line_field_mutation_response: ResolverTypeWrapper<Single_Line_Field_Mutation_Response>;
  single_line_field_obj_rel_insert_input: Single_Line_Field_Obj_Rel_Insert_Input;
  single_line_field_on_conflict: Single_Line_Field_On_Conflict;
  single_line_field_order_by: Single_Line_Field_Order_By;
  single_line_field_pk_columns_input: Single_Line_Field_Pk_Columns_Input;
  single_line_field_select_column: Single_Line_Field_Select_Column;
  single_line_field_set_input: Single_Line_Field_Set_Input;
  single_line_field_stddev_fields: ResolverTypeWrapper<Single_Line_Field_Stddev_Fields>;
  single_line_field_stddev_order_by: Single_Line_Field_Stddev_Order_By;
  single_line_field_stddev_pop_fields: ResolverTypeWrapper<Single_Line_Field_Stddev_Pop_Fields>;
  single_line_field_stddev_pop_order_by: Single_Line_Field_Stddev_Pop_Order_By;
  single_line_field_stddev_samp_fields: ResolverTypeWrapper<Single_Line_Field_Stddev_Samp_Fields>;
  single_line_field_stddev_samp_order_by: Single_Line_Field_Stddev_Samp_Order_By;
  single_line_field_sum_fields: ResolverTypeWrapper<Single_Line_Field_Sum_Fields>;
  single_line_field_sum_order_by: Single_Line_Field_Sum_Order_By;
  single_line_field_update_column: Single_Line_Field_Update_Column;
  single_line_field_var_pop_fields: ResolverTypeWrapper<Single_Line_Field_Var_Pop_Fields>;
  single_line_field_var_pop_order_by: Single_Line_Field_Var_Pop_Order_By;
  single_line_field_var_samp_fields: ResolverTypeWrapper<Single_Line_Field_Var_Samp_Fields>;
  single_line_field_var_samp_order_by: Single_Line_Field_Var_Samp_Order_By;
  single_line_field_variance_fields: ResolverTypeWrapper<Single_Line_Field_Variance_Fields>;
  single_line_field_variance_order_by: Single_Line_Field_Variance_Order_By;
  subscription_root: ResolverTypeWrapper<{}>;
  timestamptz: ResolverTypeWrapper<Scalars['timestamptz']>;
  users: ResolverTypeWrapper<Users>;
  users_aggregate: ResolverTypeWrapper<Users_Aggregate>;
  users_aggregate_fields: ResolverTypeWrapper<Users_Aggregate_Fields>;
  users_aggregate_order_by: Users_Aggregate_Order_By;
  users_arr_rel_insert_input: Users_Arr_Rel_Insert_Input;
  users_bool_exp: Users_Bool_Exp;
  users_constraint: Users_Constraint;
  users_insert_input: Users_Insert_Input;
  users_max_fields: ResolverTypeWrapper<Users_Max_Fields>;
  users_max_order_by: Users_Max_Order_By;
  users_min_fields: ResolverTypeWrapper<Users_Min_Fields>;
  users_min_order_by: Users_Min_Order_By;
  users_mutation_response: ResolverTypeWrapper<Users_Mutation_Response>;
  users_obj_rel_insert_input: Users_Obj_Rel_Insert_Input;
  users_on_conflict: Users_On_Conflict;
  users_order_by: Users_Order_By;
  users_pk_columns_input: Users_Pk_Columns_Input;
  users_select_column: Users_Select_Column;
  users_set_input: Users_Set_Input;
  users_update_column: Users_Update_Column;
  uuid: ResolverTypeWrapper<Scalars['uuid']>;
  uuid_comparison_exp: Uuid_Comparison_Exp;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean_comparison_exp: Boolean_Comparison_Exp;
  Boolean: Scalars['Boolean'];
  Int_comparison_exp: Int_Comparison_Exp;
  Int: Scalars['Int'];
  LoginOutput: LoginOutput;
  String: Scalars['String'];
  RegisterOutput: RegisterOutput;
  String_comparison_exp: String_Comparison_Exp;
  collaborators: Collaborators;
  collaborators_aggregate: Collaborators_Aggregate;
  collaborators_aggregate_fields: Collaborators_Aggregate_Fields;
  collaborators_aggregate_order_by: Collaborators_Aggregate_Order_By;
  collaborators_arr_rel_insert_input: Collaborators_Arr_Rel_Insert_Input;
  collaborators_bool_exp: Collaborators_Bool_Exp;
  collaborators_insert_input: Collaborators_Insert_Input;
  collaborators_max_fields: Collaborators_Max_Fields;
  collaborators_max_order_by: Collaborators_Max_Order_By;
  collaborators_min_fields: Collaborators_Min_Fields;
  collaborators_min_order_by: Collaborators_Min_Order_By;
  collaborators_mutation_response: Collaborators_Mutation_Response;
  collaborators_obj_rel_insert_input: Collaborators_Obj_Rel_Insert_Input;
  collaborators_on_conflict: Collaborators_On_Conflict;
  collaborators_order_by: Collaborators_Order_By;
  collaborators_pk_columns_input: Collaborators_Pk_Columns_Input;
  collaborators_set_input: Collaborators_Set_Input;
  entries: Entries;
  entries_aggregate: Entries_Aggregate;
  entries_aggregate_fields: Entries_Aggregate_Fields;
  entries_aggregate_order_by: Entries_Aggregate_Order_By;
  entries_arr_rel_insert_input: Entries_Arr_Rel_Insert_Input;
  entries_bool_exp: Entries_Bool_Exp;
  entries_insert_input: Entries_Insert_Input;
  entries_max_fields: Entries_Max_Fields;
  entries_max_order_by: Entries_Max_Order_By;
  entries_min_fields: Entries_Min_Fields;
  entries_min_order_by: Entries_Min_Order_By;
  entries_mutation_response: Entries_Mutation_Response;
  entries_obj_rel_insert_input: Entries_Obj_Rel_Insert_Input;
  entries_on_conflict: Entries_On_Conflict;
  entries_order_by: Entries_Order_By;
  entries_pk_columns_input: Entries_Pk_Columns_Input;
  entries_set_input: Entries_Set_Input;
  entry_status: Entry_Status;
  entry_status_aggregate: Entry_Status_Aggregate;
  entry_status_aggregate_fields: Entry_Status_Aggregate_Fields;
  entry_status_aggregate_order_by: Entry_Status_Aggregate_Order_By;
  entry_status_arr_rel_insert_input: Entry_Status_Arr_Rel_Insert_Input;
  entry_status_bool_exp: Entry_Status_Bool_Exp;
  entry_status_insert_input: Entry_Status_Insert_Input;
  entry_status_max_fields: Entry_Status_Max_Fields;
  entry_status_max_order_by: Entry_Status_Max_Order_By;
  entry_status_min_fields: Entry_Status_Min_Fields;
  entry_status_min_order_by: Entry_Status_Min_Order_By;
  entry_status_mutation_response: Entry_Status_Mutation_Response;
  entry_status_obj_rel_insert_input: Entry_Status_Obj_Rel_Insert_Input;
  entry_status_on_conflict: Entry_Status_On_Conflict;
  entry_status_order_by: Entry_Status_Order_By;
  entry_status_pk_columns_input: Entry_Status_Pk_Columns_Input;
  entry_status_set_input: Entry_Status_Set_Input;
  file_field: File_Field;
  file_field_aggregate: File_Field_Aggregate;
  file_field_aggregate_fields: File_Field_Aggregate_Fields;
  file_field_aggregate_order_by: File_Field_Aggregate_Order_By;
  file_field_arr_rel_insert_input: File_Field_Arr_Rel_Insert_Input;
  file_field_avg_fields: File_Field_Avg_Fields;
  Float: Scalars['Float'];
  file_field_avg_order_by: File_Field_Avg_Order_By;
  file_field_bool_exp: File_Field_Bool_Exp;
  file_field_content: File_Field_Content;
  file_field_content_aggregate: File_Field_Content_Aggregate;
  file_field_content_aggregate_fields: File_Field_Content_Aggregate_Fields;
  file_field_content_aggregate_order_by: File_Field_Content_Aggregate_Order_By;
  file_field_content_arr_rel_insert_input: File_Field_Content_Arr_Rel_Insert_Input;
  file_field_content_avg_fields: File_Field_Content_Avg_Fields;
  file_field_content_avg_order_by: File_Field_Content_Avg_Order_By;
  file_field_content_bool_exp: File_Field_Content_Bool_Exp;
  file_field_content_inc_input: File_Field_Content_Inc_Input;
  file_field_content_insert_input: File_Field_Content_Insert_Input;
  file_field_content_max_fields: File_Field_Content_Max_Fields;
  file_field_content_max_order_by: File_Field_Content_Max_Order_By;
  file_field_content_min_fields: File_Field_Content_Min_Fields;
  file_field_content_min_order_by: File_Field_Content_Min_Order_By;
  file_field_content_mutation_response: File_Field_Content_Mutation_Response;
  file_field_content_obj_rel_insert_input: File_Field_Content_Obj_Rel_Insert_Input;
  file_field_content_on_conflict: File_Field_Content_On_Conflict;
  file_field_content_order_by: File_Field_Content_Order_By;
  file_field_content_pk_columns_input: File_Field_Content_Pk_Columns_Input;
  file_field_content_set_input: File_Field_Content_Set_Input;
  file_field_content_stddev_fields: File_Field_Content_Stddev_Fields;
  file_field_content_stddev_order_by: File_Field_Content_Stddev_Order_By;
  file_field_content_stddev_pop_fields: File_Field_Content_Stddev_Pop_Fields;
  file_field_content_stddev_pop_order_by: File_Field_Content_Stddev_Pop_Order_By;
  file_field_content_stddev_samp_fields: File_Field_Content_Stddev_Samp_Fields;
  file_field_content_stddev_samp_order_by: File_Field_Content_Stddev_Samp_Order_By;
  file_field_content_sum_fields: File_Field_Content_Sum_Fields;
  file_field_content_sum_order_by: File_Field_Content_Sum_Order_By;
  file_field_content_var_pop_fields: File_Field_Content_Var_Pop_Fields;
  file_field_content_var_pop_order_by: File_Field_Content_Var_Pop_Order_By;
  file_field_content_var_samp_fields: File_Field_Content_Var_Samp_Fields;
  file_field_content_var_samp_order_by: File_Field_Content_Var_Samp_Order_By;
  file_field_content_variance_fields: File_Field_Content_Variance_Fields;
  file_field_content_variance_order_by: File_Field_Content_Variance_Order_By;
  file_field_inc_input: File_Field_Inc_Input;
  file_field_insert_input: File_Field_Insert_Input;
  file_field_max_fields: File_Field_Max_Fields;
  file_field_max_order_by: File_Field_Max_Order_By;
  file_field_min_fields: File_Field_Min_Fields;
  file_field_min_order_by: File_Field_Min_Order_By;
  file_field_mutation_response: File_Field_Mutation_Response;
  file_field_obj_rel_insert_input: File_Field_Obj_Rel_Insert_Input;
  file_field_on_conflict: File_Field_On_Conflict;
  file_field_order_by: File_Field_Order_By;
  file_field_pk_columns_input: File_Field_Pk_Columns_Input;
  file_field_set_input: File_Field_Set_Input;
  file_field_stddev_fields: File_Field_Stddev_Fields;
  file_field_stddev_order_by: File_Field_Stddev_Order_By;
  file_field_stddev_pop_fields: File_Field_Stddev_Pop_Fields;
  file_field_stddev_pop_order_by: File_Field_Stddev_Pop_Order_By;
  file_field_stddev_samp_fields: File_Field_Stddev_Samp_Fields;
  file_field_stddev_samp_order_by: File_Field_Stddev_Samp_Order_By;
  file_field_sum_fields: File_Field_Sum_Fields;
  file_field_sum_order_by: File_Field_Sum_Order_By;
  file_field_var_pop_fields: File_Field_Var_Pop_Fields;
  file_field_var_pop_order_by: File_Field_Var_Pop_Order_By;
  file_field_var_samp_fields: File_Field_Var_Samp_Fields;
  file_field_var_samp_order_by: File_Field_Var_Samp_Order_By;
  file_field_variance_fields: File_Field_Variance_Fields;
  file_field_variance_order_by: File_Field_Variance_Order_By;
  float8: Scalars['float8'];
  float8_comparison_exp: Float8_Comparison_Exp;
  grants: Scalars['grants'];
  grants_comparison_exp: Grants_Comparison_Exp;
  json: Scalars['json'];
  json_comparison_exp: Json_Comparison_Exp;
  mime_types: Scalars['mime_types'];
  mime_types_comparison_exp: Mime_Types_Comparison_Exp;
  models: Models;
  models_aggregate: Models_Aggregate;
  models_aggregate_fields: Models_Aggregate_Fields;
  models_aggregate_order_by: Models_Aggregate_Order_By;
  models_arr_rel_insert_input: Models_Arr_Rel_Insert_Input;
  models_bool_exp: Models_Bool_Exp;
  models_insert_input: Models_Insert_Input;
  models_max_fields: Models_Max_Fields;
  models_max_order_by: Models_Max_Order_By;
  models_min_fields: Models_Min_Fields;
  models_min_order_by: Models_Min_Order_By;
  models_mutation_response: Models_Mutation_Response;
  models_obj_rel_insert_input: Models_Obj_Rel_Insert_Input;
  models_on_conflict: Models_On_Conflict;
  models_order_by: Models_Order_By;
  models_pk_columns_input: Models_Pk_Columns_Input;
  models_set_input: Models_Set_Input;
  multi_line_field: Multi_Line_Field;
  multi_line_field_aggregate: Multi_Line_Field_Aggregate;
  multi_line_field_aggregate_fields: Multi_Line_Field_Aggregate_Fields;
  multi_line_field_aggregate_order_by: Multi_Line_Field_Aggregate_Order_By;
  multi_line_field_arr_rel_insert_input: Multi_Line_Field_Arr_Rel_Insert_Input;
  multi_line_field_avg_fields: Multi_Line_Field_Avg_Fields;
  multi_line_field_avg_order_by: Multi_Line_Field_Avg_Order_By;
  multi_line_field_bool_exp: Multi_Line_Field_Bool_Exp;
  multi_line_field_content: Multi_Line_Field_Content;
  multi_line_field_content_aggregate: Multi_Line_Field_Content_Aggregate;
  multi_line_field_content_aggregate_fields: Multi_Line_Field_Content_Aggregate_Fields;
  multi_line_field_content_aggregate_order_by: Multi_Line_Field_Content_Aggregate_Order_By;
  multi_line_field_content_arr_rel_insert_input: Multi_Line_Field_Content_Arr_Rel_Insert_Input;
  multi_line_field_content_bool_exp: Multi_Line_Field_Content_Bool_Exp;
  multi_line_field_content_insert_input: Multi_Line_Field_Content_Insert_Input;
  multi_line_field_content_max_fields: Multi_Line_Field_Content_Max_Fields;
  multi_line_field_content_max_order_by: Multi_Line_Field_Content_Max_Order_By;
  multi_line_field_content_min_fields: Multi_Line_Field_Content_Min_Fields;
  multi_line_field_content_min_order_by: Multi_Line_Field_Content_Min_Order_By;
  multi_line_field_content_mutation_response: Multi_Line_Field_Content_Mutation_Response;
  multi_line_field_content_obj_rel_insert_input: Multi_Line_Field_Content_Obj_Rel_Insert_Input;
  multi_line_field_content_on_conflict: Multi_Line_Field_Content_On_Conflict;
  multi_line_field_content_order_by: Multi_Line_Field_Content_Order_By;
  multi_line_field_content_pk_columns_input: Multi_Line_Field_Content_Pk_Columns_Input;
  multi_line_field_content_set_input: Multi_Line_Field_Content_Set_Input;
  multi_line_field_inc_input: Multi_Line_Field_Inc_Input;
  multi_line_field_insert_input: Multi_Line_Field_Insert_Input;
  multi_line_field_max_fields: Multi_Line_Field_Max_Fields;
  multi_line_field_max_order_by: Multi_Line_Field_Max_Order_By;
  multi_line_field_min_fields: Multi_Line_Field_Min_Fields;
  multi_line_field_min_order_by: Multi_Line_Field_Min_Order_By;
  multi_line_field_mutation_response: Multi_Line_Field_Mutation_Response;
  multi_line_field_obj_rel_insert_input: Multi_Line_Field_Obj_Rel_Insert_Input;
  multi_line_field_on_conflict: Multi_Line_Field_On_Conflict;
  multi_line_field_order_by: Multi_Line_Field_Order_By;
  multi_line_field_pk_columns_input: Multi_Line_Field_Pk_Columns_Input;
  multi_line_field_set_input: Multi_Line_Field_Set_Input;
  multi_line_field_stddev_fields: Multi_Line_Field_Stddev_Fields;
  multi_line_field_stddev_order_by: Multi_Line_Field_Stddev_Order_By;
  multi_line_field_stddev_pop_fields: Multi_Line_Field_Stddev_Pop_Fields;
  multi_line_field_stddev_pop_order_by: Multi_Line_Field_Stddev_Pop_Order_By;
  multi_line_field_stddev_samp_fields: Multi_Line_Field_Stddev_Samp_Fields;
  multi_line_field_stddev_samp_order_by: Multi_Line_Field_Stddev_Samp_Order_By;
  multi_line_field_sum_fields: Multi_Line_Field_Sum_Fields;
  multi_line_field_sum_order_by: Multi_Line_Field_Sum_Order_By;
  multi_line_field_var_pop_fields: Multi_Line_Field_Var_Pop_Fields;
  multi_line_field_var_pop_order_by: Multi_Line_Field_Var_Pop_Order_By;
  multi_line_field_var_samp_fields: Multi_Line_Field_Var_Samp_Fields;
  multi_line_field_var_samp_order_by: Multi_Line_Field_Var_Samp_Order_By;
  multi_line_field_variance_fields: Multi_Line_Field_Variance_Fields;
  multi_line_field_variance_order_by: Multi_Line_Field_Variance_Order_By;
  mutation_root: {};
  projects: Projects;
  projects_aggregate: Projects_Aggregate;
  projects_aggregate_fields: Projects_Aggregate_Fields;
  projects_aggregate_order_by: Projects_Aggregate_Order_By;
  projects_arr_rel_insert_input: Projects_Arr_Rel_Insert_Input;
  projects_bool_exp: Projects_Bool_Exp;
  projects_insert_input: Projects_Insert_Input;
  projects_max_fields: Projects_Max_Fields;
  projects_max_order_by: Projects_Max_Order_By;
  projects_min_fields: Projects_Min_Fields;
  projects_min_order_by: Projects_Min_Order_By;
  projects_mutation_response: Projects_Mutation_Response;
  projects_obj_rel_insert_input: Projects_Obj_Rel_Insert_Input;
  projects_on_conflict: Projects_On_Conflict;
  projects_order_by: Projects_Order_By;
  projects_pk_columns_input: Projects_Pk_Columns_Input;
  projects_set_input: Projects_Set_Input;
  query_root: {};
  role_grants: Role_Grants;
  role_grants_aggregate: Role_Grants_Aggregate;
  role_grants_aggregate_fields: Role_Grants_Aggregate_Fields;
  role_grants_aggregate_order_by: Role_Grants_Aggregate_Order_By;
  role_grants_arr_rel_insert_input: Role_Grants_Arr_Rel_Insert_Input;
  role_grants_bool_exp: Role_Grants_Bool_Exp;
  role_grants_insert_input: Role_Grants_Insert_Input;
  role_grants_max_fields: Role_Grants_Max_Fields;
  role_grants_max_order_by: Role_Grants_Max_Order_By;
  role_grants_min_fields: Role_Grants_Min_Fields;
  role_grants_min_order_by: Role_Grants_Min_Order_By;
  role_grants_mutation_response: Role_Grants_Mutation_Response;
  role_grants_obj_rel_insert_input: Role_Grants_Obj_Rel_Insert_Input;
  role_grants_on_conflict: Role_Grants_On_Conflict;
  role_grants_order_by: Role_Grants_Order_By;
  role_grants_pk_columns_input: Role_Grants_Pk_Columns_Input;
  role_grants_set_input: Role_Grants_Set_Input;
  roles: Roles;
  roles_aggregate: Roles_Aggregate;
  roles_aggregate_fields: Roles_Aggregate_Fields;
  roles_aggregate_order_by: Roles_Aggregate_Order_By;
  roles_arr_rel_insert_input: Roles_Arr_Rel_Insert_Input;
  roles_bool_exp: Roles_Bool_Exp;
  roles_insert_input: Roles_Insert_Input;
  roles_max_fields: Roles_Max_Fields;
  roles_max_order_by: Roles_Max_Order_By;
  roles_min_fields: Roles_Min_Fields;
  roles_min_order_by: Roles_Min_Order_By;
  roles_mutation_response: Roles_Mutation_Response;
  roles_obj_rel_insert_input: Roles_Obj_Rel_Insert_Input;
  roles_on_conflict: Roles_On_Conflict;
  roles_order_by: Roles_Order_By;
  roles_pk_columns_input: Roles_Pk_Columns_Input;
  roles_set_input: Roles_Set_Input;
  single_line_field: Single_Line_Field;
  single_line_field_aggregate: Single_Line_Field_Aggregate;
  single_line_field_aggregate_fields: Single_Line_Field_Aggregate_Fields;
  single_line_field_aggregate_order_by: Single_Line_Field_Aggregate_Order_By;
  single_line_field_arr_rel_insert_input: Single_Line_Field_Arr_Rel_Insert_Input;
  single_line_field_avg_fields: Single_Line_Field_Avg_Fields;
  single_line_field_avg_order_by: Single_Line_Field_Avg_Order_By;
  single_line_field_bool_exp: Single_Line_Field_Bool_Exp;
  single_line_field_content: Single_Line_Field_Content;
  single_line_field_content_aggregate: Single_Line_Field_Content_Aggregate;
  single_line_field_content_aggregate_fields: Single_Line_Field_Content_Aggregate_Fields;
  single_line_field_content_aggregate_order_by: Single_Line_Field_Content_Aggregate_Order_By;
  single_line_field_content_arr_rel_insert_input: Single_Line_Field_Content_Arr_Rel_Insert_Input;
  single_line_field_content_bool_exp: Single_Line_Field_Content_Bool_Exp;
  single_line_field_content_insert_input: Single_Line_Field_Content_Insert_Input;
  single_line_field_content_max_fields: Single_Line_Field_Content_Max_Fields;
  single_line_field_content_max_order_by: Single_Line_Field_Content_Max_Order_By;
  single_line_field_content_min_fields: Single_Line_Field_Content_Min_Fields;
  single_line_field_content_min_order_by: Single_Line_Field_Content_Min_Order_By;
  single_line_field_content_mutation_response: Single_Line_Field_Content_Mutation_Response;
  single_line_field_content_obj_rel_insert_input: Single_Line_Field_Content_Obj_Rel_Insert_Input;
  single_line_field_content_on_conflict: Single_Line_Field_Content_On_Conflict;
  single_line_field_content_order_by: Single_Line_Field_Content_Order_By;
  single_line_field_content_pk_columns_input: Single_Line_Field_Content_Pk_Columns_Input;
  single_line_field_content_set_input: Single_Line_Field_Content_Set_Input;
  single_line_field_inc_input: Single_Line_Field_Inc_Input;
  single_line_field_insert_input: Single_Line_Field_Insert_Input;
  single_line_field_max_fields: Single_Line_Field_Max_Fields;
  single_line_field_max_order_by: Single_Line_Field_Max_Order_By;
  single_line_field_min_fields: Single_Line_Field_Min_Fields;
  single_line_field_min_order_by: Single_Line_Field_Min_Order_By;
  single_line_field_mutation_response: Single_Line_Field_Mutation_Response;
  single_line_field_obj_rel_insert_input: Single_Line_Field_Obj_Rel_Insert_Input;
  single_line_field_on_conflict: Single_Line_Field_On_Conflict;
  single_line_field_order_by: Single_Line_Field_Order_By;
  single_line_field_pk_columns_input: Single_Line_Field_Pk_Columns_Input;
  single_line_field_set_input: Single_Line_Field_Set_Input;
  single_line_field_stddev_fields: Single_Line_Field_Stddev_Fields;
  single_line_field_stddev_order_by: Single_Line_Field_Stddev_Order_By;
  single_line_field_stddev_pop_fields: Single_Line_Field_Stddev_Pop_Fields;
  single_line_field_stddev_pop_order_by: Single_Line_Field_Stddev_Pop_Order_By;
  single_line_field_stddev_samp_fields: Single_Line_Field_Stddev_Samp_Fields;
  single_line_field_stddev_samp_order_by: Single_Line_Field_Stddev_Samp_Order_By;
  single_line_field_sum_fields: Single_Line_Field_Sum_Fields;
  single_line_field_sum_order_by: Single_Line_Field_Sum_Order_By;
  single_line_field_var_pop_fields: Single_Line_Field_Var_Pop_Fields;
  single_line_field_var_pop_order_by: Single_Line_Field_Var_Pop_Order_By;
  single_line_field_var_samp_fields: Single_Line_Field_Var_Samp_Fields;
  single_line_field_var_samp_order_by: Single_Line_Field_Var_Samp_Order_By;
  single_line_field_variance_fields: Single_Line_Field_Variance_Fields;
  single_line_field_variance_order_by: Single_Line_Field_Variance_Order_By;
  subscription_root: {};
  timestamptz: Scalars['timestamptz'];
  users: Users;
  users_aggregate: Users_Aggregate;
  users_aggregate_fields: Users_Aggregate_Fields;
  users_aggregate_order_by: Users_Aggregate_Order_By;
  users_arr_rel_insert_input: Users_Arr_Rel_Insert_Input;
  users_bool_exp: Users_Bool_Exp;
  users_insert_input: Users_Insert_Input;
  users_max_fields: Users_Max_Fields;
  users_max_order_by: Users_Max_Order_By;
  users_min_fields: Users_Min_Fields;
  users_min_order_by: Users_Min_Order_By;
  users_mutation_response: Users_Mutation_Response;
  users_obj_rel_insert_input: Users_Obj_Rel_Insert_Input;
  users_on_conflict: Users_On_Conflict;
  users_order_by: Users_Order_By;
  users_pk_columns_input: Users_Pk_Columns_Input;
  users_set_input: Users_Set_Input;
  uuid: Scalars['uuid'];
  uuid_comparison_exp: Uuid_Comparison_Exp;
};

export type LoginOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['LoginOutput'] = ResolversParentTypes['LoginOutput']> = {
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RegisterOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['RegisterOutput'] = ResolversParentTypes['RegisterOutput']> = {
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollaboratorsResolvers<ContextType = any, ParentType extends ResolversParentTypes['collaborators'] = ResolversParentTypes['collaborators']> = {
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  project?: Resolver<ResolversTypes['projects'], ParentType, ContextType>;
  project_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['roles'], ParentType, ContextType>;
  role_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['users'], ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Collaborators_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['collaborators_aggregate'] = ResolversParentTypes['collaborators_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['collaborators_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['collaborators']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Collaborators_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['collaborators_aggregate_fields'] = ResolversParentTypes['collaborators_aggregate_fields']> = {
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Collaborators_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['collaborators_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['collaborators_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Collaborators_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['collaborators_max_fields'] = ResolversParentTypes['collaborators_max_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  project_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  role_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Collaborators_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['collaborators_min_fields'] = ResolversParentTypes['collaborators_min_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  project_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  role_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Collaborators_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['collaborators_mutation_response'] = ResolversParentTypes['collaborators_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['collaborators']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntriesResolvers<ContextType = any, ParentType extends ResolversParentTypes['entries'] = ResolversParentTypes['entries']> = {
  file_field_contents?: Resolver<Array<ResolversTypes['file_field_content']>, ParentType, ContextType, RequireFields<EntriesFile_Field_ContentsArgs, never>>;
  file_field_contents_aggregate?: Resolver<ResolversTypes['file_field_content_aggregate'], ParentType, ContextType, RequireFields<EntriesFile_Field_Contents_AggregateArgs, never>>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  model?: Resolver<ResolversTypes['models'], ParentType, ContextType>;
  model_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  multi_line_field_contents?: Resolver<Array<ResolversTypes['multi_line_field_content']>, ParentType, ContextType, RequireFields<EntriesMulti_Line_Field_ContentsArgs, never>>;
  multi_line_field_contents_aggregate?: Resolver<ResolversTypes['multi_line_field_content_aggregate'], ParentType, ContextType, RequireFields<EntriesMulti_Line_Field_Contents_AggregateArgs, never>>;
  single_line_field_contents?: Resolver<Array<ResolversTypes['single_line_field_content']>, ParentType, ContextType, RequireFields<EntriesSingle_Line_Field_ContentsArgs, never>>;
  single_line_field_contents_aggregate?: Resolver<ResolversTypes['single_line_field_content_aggregate'], ParentType, ContextType, RequireFields<EntriesSingle_Line_Field_Contents_AggregateArgs, never>>;
  status?: Resolver<ResolversTypes['entry_status'], ParentType, ContextType>;
  status_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Entries_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['entries_aggregate'] = ResolversParentTypes['entries_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['entries_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['entries']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Entries_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['entries_aggregate_fields'] = ResolversParentTypes['entries_aggregate_fields']> = {
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Entries_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['entries_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['entries_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Entries_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['entries_max_fields'] = ResolversParentTypes['entries_max_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  model_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  status_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Entries_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['entries_min_fields'] = ResolversParentTypes['entries_min_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  model_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  status_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Entries_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['entries_mutation_response'] = ResolversParentTypes['entries_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['entries']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Entry_StatusResolvers<ContextType = any, ParentType extends ResolversParentTypes['entry_status'] = ResolversParentTypes['entry_status']> = {
  entry?: Resolver<ResolversTypes['entries'], ParentType, ContextType>;
  entry_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  published?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Entry_Status_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['entry_status_aggregate'] = ResolversParentTypes['entry_status_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['entry_status_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['entry_status']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Entry_Status_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['entry_status_aggregate_fields'] = ResolversParentTypes['entry_status_aggregate_fields']> = {
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Entry_Status_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['entry_status_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['entry_status_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Entry_Status_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['entry_status_max_fields'] = ResolversParentTypes['entry_status_max_fields']> = {
  entry_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Entry_Status_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['entry_status_min_fields'] = ResolversParentTypes['entry_status_min_fields']> = {
  entry_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Entry_Status_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['entry_status_mutation_response'] = ResolversParentTypes['entry_status_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['entry_status']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type File_FieldResolvers<ContextType = any, ParentType extends ResolversParentTypes['file_field'] = ResolversParentTypes['file_field']> = {
  api_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  display_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hidden?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  model?: Resolver<ResolversTypes['models'], ParentType, ContextType>;
  model_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  required?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type File_Field_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['file_field_aggregate'] = ResolversParentTypes['file_field_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['file_field_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['file_field']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type File_Field_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['file_field_aggregate_fields'] = ResolversParentTypes['file_field_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['file_field_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<File_Field_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['file_field_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['file_field_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['file_field_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['file_field_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['file_field_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['file_field_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['file_field_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['file_field_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['file_field_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type File_Field_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['file_field_avg_fields'] = ResolversParentTypes['file_field_avg_fields']> = {
  position?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type File_Field_ContentResolvers<ContextType = any, ParentType extends ResolversParentTypes['file_field_content'] = ResolversParentTypes['file_field_content']> = {
  entry_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  field?: Resolver<ResolversTypes['file_field'], ParentType, ContextType>;
  field_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  file_location?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  file_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  mime_type?: Resolver<ResolversTypes['mime_types'], ParentType, ContextType>;
  size?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type File_Field_Content_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['file_field_content_aggregate'] = ResolversParentTypes['file_field_content_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['file_field_content_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['file_field_content']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type File_Field_Content_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['file_field_content_aggregate_fields'] = ResolversParentTypes['file_field_content_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['file_field_content_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<File_Field_Content_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['file_field_content_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['file_field_content_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['file_field_content_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['file_field_content_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['file_field_content_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['file_field_content_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['file_field_content_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['file_field_content_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['file_field_content_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type File_Field_Content_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['file_field_content_avg_fields'] = ResolversParentTypes['file_field_content_avg_fields']> = {
  height?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type File_Field_Content_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['file_field_content_max_fields'] = ResolversParentTypes['file_field_content_max_fields']> = {
  entry_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  field_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  file_location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  file_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type File_Field_Content_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['file_field_content_min_fields'] = ResolversParentTypes['file_field_content_min_fields']> = {
  entry_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  field_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  file_location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  file_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type File_Field_Content_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['file_field_content_mutation_response'] = ResolversParentTypes['file_field_content_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['file_field_content']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type File_Field_Content_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['file_field_content_stddev_fields'] = ResolversParentTypes['file_field_content_stddev_fields']> = {
  height?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type File_Field_Content_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['file_field_content_stddev_pop_fields'] = ResolversParentTypes['file_field_content_stddev_pop_fields']> = {
  height?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type File_Field_Content_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['file_field_content_stddev_samp_fields'] = ResolversParentTypes['file_field_content_stddev_samp_fields']> = {
  height?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type File_Field_Content_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['file_field_content_sum_fields'] = ResolversParentTypes['file_field_content_sum_fields']> = {
  height?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type File_Field_Content_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['file_field_content_var_pop_fields'] = ResolversParentTypes['file_field_content_var_pop_fields']> = {
  height?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type File_Field_Content_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['file_field_content_var_samp_fields'] = ResolversParentTypes['file_field_content_var_samp_fields']> = {
  height?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type File_Field_Content_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['file_field_content_variance_fields'] = ResolversParentTypes['file_field_content_variance_fields']> = {
  height?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type File_Field_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['file_field_max_fields'] = ResolversParentTypes['file_field_max_fields']> = {
  api_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  display_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  model_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type File_Field_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['file_field_min_fields'] = ResolversParentTypes['file_field_min_fields']> = {
  api_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  display_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  model_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type File_Field_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['file_field_mutation_response'] = ResolversParentTypes['file_field_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['file_field']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type File_Field_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['file_field_stddev_fields'] = ResolversParentTypes['file_field_stddev_fields']> = {
  position?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type File_Field_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['file_field_stddev_pop_fields'] = ResolversParentTypes['file_field_stddev_pop_fields']> = {
  position?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type File_Field_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['file_field_stddev_samp_fields'] = ResolversParentTypes['file_field_stddev_samp_fields']> = {
  position?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type File_Field_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['file_field_sum_fields'] = ResolversParentTypes['file_field_sum_fields']> = {
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type File_Field_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['file_field_var_pop_fields'] = ResolversParentTypes['file_field_var_pop_fields']> = {
  position?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type File_Field_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['file_field_var_samp_fields'] = ResolversParentTypes['file_field_var_samp_fields']> = {
  position?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type File_Field_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['file_field_variance_fields'] = ResolversParentTypes['file_field_variance_fields']> = {
  position?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface Float8ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['float8'], any> {
  name: 'float8';
}

export interface GrantsScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['grants'], any> {
  name: 'grants';
}

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['json'], any> {
  name: 'json';
}

export interface Mime_TypesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['mime_types'], any> {
  name: 'mime_types';
}

export type ModelsResolvers<ContextType = any, ParentType extends ResolversParentTypes['models'] = ResolversParentTypes['models']> = {
  api_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  display_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  entries?: Resolver<Array<ResolversTypes['entries']>, ParentType, ContextType, RequireFields<ModelsEntriesArgs, never>>;
  entries_aggregate?: Resolver<ResolversTypes['entries_aggregate'], ParentType, ContextType, RequireFields<ModelsEntries_AggregateArgs, never>>;
  file_fields?: Resolver<Array<ResolversTypes['file_field']>, ParentType, ContextType, RequireFields<ModelsFile_FieldsArgs, never>>;
  file_fields_aggregate?: Resolver<ResolversTypes['file_field_aggregate'], ParentType, ContextType, RequireFields<ModelsFile_Fields_AggregateArgs, never>>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  multi_line_fields?: Resolver<Array<ResolversTypes['multi_line_field']>, ParentType, ContextType, RequireFields<ModelsMulti_Line_FieldsArgs, never>>;
  multi_line_fields_aggregate?: Resolver<ResolversTypes['multi_line_field_aggregate'], ParentType, ContextType, RequireFields<ModelsMulti_Line_Fields_AggregateArgs, never>>;
  project?: Resolver<ResolversTypes['projects'], ParentType, ContextType>;
  project_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  single_line_fields?: Resolver<Array<ResolversTypes['single_line_field']>, ParentType, ContextType, RequireFields<ModelsSingle_Line_FieldsArgs, never>>;
  single_line_fields_aggregate?: Resolver<ResolversTypes['single_line_field_aggregate'], ParentType, ContextType, RequireFields<ModelsSingle_Line_Fields_AggregateArgs, never>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Models_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['models_aggregate'] = ResolversParentTypes['models_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['models_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['models']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Models_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['models_aggregate_fields'] = ResolversParentTypes['models_aggregate_fields']> = {
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Models_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['models_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['models_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Models_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['models_max_fields'] = ResolversParentTypes['models_max_fields']> = {
  api_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  display_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  project_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Models_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['models_min_fields'] = ResolversParentTypes['models_min_fields']> = {
  api_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  display_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  project_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Models_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['models_mutation_response'] = ResolversParentTypes['models_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['models']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Multi_Line_FieldResolvers<ContextType = any, ParentType extends ResolversParentTypes['multi_line_field'] = ResolversParentTypes['multi_line_field']> = {
  api_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  display_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hidden?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  model?: Resolver<ResolversTypes['models'], ParentType, ContextType>;
  model_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  required?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Multi_Line_Field_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['multi_line_field_aggregate'] = ResolversParentTypes['multi_line_field_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['multi_line_field_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['multi_line_field']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Multi_Line_Field_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['multi_line_field_aggregate_fields'] = ResolversParentTypes['multi_line_field_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['multi_line_field_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Multi_Line_Field_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['multi_line_field_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['multi_line_field_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['multi_line_field_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['multi_line_field_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['multi_line_field_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['multi_line_field_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['multi_line_field_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['multi_line_field_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['multi_line_field_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Multi_Line_Field_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['multi_line_field_avg_fields'] = ResolversParentTypes['multi_line_field_avg_fields']> = {
  position?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Multi_Line_Field_ContentResolvers<ContextType = any, ParentType extends ResolversParentTypes['multi_line_field_content'] = ResolversParentTypes['multi_line_field_content']> = {
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  entry_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  field?: Resolver<ResolversTypes['multi_line_field'], ParentType, ContextType>;
  field_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Multi_Line_Field_Content_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['multi_line_field_content_aggregate'] = ResolversParentTypes['multi_line_field_content_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['multi_line_field_content_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['multi_line_field_content']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Multi_Line_Field_Content_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['multi_line_field_content_aggregate_fields'] = ResolversParentTypes['multi_line_field_content_aggregate_fields']> = {
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Multi_Line_Field_Content_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['multi_line_field_content_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['multi_line_field_content_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Multi_Line_Field_Content_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['multi_line_field_content_max_fields'] = ResolversParentTypes['multi_line_field_content_max_fields']> = {
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  entry_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  field_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Multi_Line_Field_Content_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['multi_line_field_content_min_fields'] = ResolversParentTypes['multi_line_field_content_min_fields']> = {
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  entry_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  field_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Multi_Line_Field_Content_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['multi_line_field_content_mutation_response'] = ResolversParentTypes['multi_line_field_content_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['multi_line_field_content']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Multi_Line_Field_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['multi_line_field_max_fields'] = ResolversParentTypes['multi_line_field_max_fields']> = {
  api_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  display_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  model_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Multi_Line_Field_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['multi_line_field_min_fields'] = ResolversParentTypes['multi_line_field_min_fields']> = {
  api_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  display_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  model_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Multi_Line_Field_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['multi_line_field_mutation_response'] = ResolversParentTypes['multi_line_field_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['multi_line_field']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Multi_Line_Field_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['multi_line_field_stddev_fields'] = ResolversParentTypes['multi_line_field_stddev_fields']> = {
  position?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Multi_Line_Field_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['multi_line_field_stddev_pop_fields'] = ResolversParentTypes['multi_line_field_stddev_pop_fields']> = {
  position?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Multi_Line_Field_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['multi_line_field_stddev_samp_fields'] = ResolversParentTypes['multi_line_field_stddev_samp_fields']> = {
  position?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Multi_Line_Field_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['multi_line_field_sum_fields'] = ResolversParentTypes['multi_line_field_sum_fields']> = {
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Multi_Line_Field_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['multi_line_field_var_pop_fields'] = ResolversParentTypes['multi_line_field_var_pop_fields']> = {
  position?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Multi_Line_Field_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['multi_line_field_var_samp_fields'] = ResolversParentTypes['multi_line_field_var_samp_fields']> = {
  position?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Multi_Line_Field_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['multi_line_field_variance_fields'] = ResolversParentTypes['multi_line_field_variance_fields']> = {
  position?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Mutation_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['mutation_root'] = ResolversParentTypes['mutation_root']> = {
  delete_collaborators?: Resolver<Maybe<ResolversTypes['collaborators_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_CollaboratorsArgs, 'where'>>;
  delete_collaborators_by_pk?: Resolver<Maybe<ResolversTypes['collaborators']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Collaborators_By_PkArgs, 'id'>>;
  delete_entries?: Resolver<Maybe<ResolversTypes['entries_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_EntriesArgs, 'where'>>;
  delete_entries_by_pk?: Resolver<Maybe<ResolversTypes['entries']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Entries_By_PkArgs, 'id'>>;
  delete_entry_status?: Resolver<Maybe<ResolversTypes['entry_status_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Entry_StatusArgs, 'where'>>;
  delete_entry_status_by_pk?: Resolver<Maybe<ResolversTypes['entry_status']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Entry_Status_By_PkArgs, 'id'>>;
  delete_file_field?: Resolver<Maybe<ResolversTypes['file_field_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_File_FieldArgs, 'where'>>;
  delete_file_field_by_pk?: Resolver<Maybe<ResolversTypes['file_field']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_File_Field_By_PkArgs, 'id'>>;
  delete_file_field_content?: Resolver<Maybe<ResolversTypes['file_field_content_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_File_Field_ContentArgs, 'where'>>;
  delete_file_field_content_by_pk?: Resolver<Maybe<ResolversTypes['file_field_content']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_File_Field_Content_By_PkArgs, 'id'>>;
  delete_models?: Resolver<Maybe<ResolversTypes['models_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_ModelsArgs, 'where'>>;
  delete_models_by_pk?: Resolver<Maybe<ResolversTypes['models']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Models_By_PkArgs, 'id'>>;
  delete_multi_line_field?: Resolver<Maybe<ResolversTypes['multi_line_field_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Multi_Line_FieldArgs, 'where'>>;
  delete_multi_line_field_by_pk?: Resolver<Maybe<ResolversTypes['multi_line_field']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Multi_Line_Field_By_PkArgs, 'id'>>;
  delete_multi_line_field_content?: Resolver<Maybe<ResolversTypes['multi_line_field_content_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Multi_Line_Field_ContentArgs, 'where'>>;
  delete_multi_line_field_content_by_pk?: Resolver<Maybe<ResolversTypes['multi_line_field_content']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Multi_Line_Field_Content_By_PkArgs, 'id'>>;
  delete_projects?: Resolver<Maybe<ResolversTypes['projects_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_ProjectsArgs, 'where'>>;
  delete_projects_by_pk?: Resolver<Maybe<ResolversTypes['projects']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Projects_By_PkArgs, 'id'>>;
  delete_role_grants?: Resolver<Maybe<ResolversTypes['role_grants_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Role_GrantsArgs, 'where'>>;
  delete_role_grants_by_pk?: Resolver<Maybe<ResolversTypes['role_grants']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Role_Grants_By_PkArgs, 'id'>>;
  delete_roles?: Resolver<Maybe<ResolversTypes['roles_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_RolesArgs, 'where'>>;
  delete_roles_by_pk?: Resolver<Maybe<ResolversTypes['roles']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Roles_By_PkArgs, 'id'>>;
  delete_single_line_field?: Resolver<Maybe<ResolversTypes['single_line_field_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Single_Line_FieldArgs, 'where'>>;
  delete_single_line_field_by_pk?: Resolver<Maybe<ResolversTypes['single_line_field']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Single_Line_Field_By_PkArgs, 'id'>>;
  delete_single_line_field_content?: Resolver<Maybe<ResolversTypes['single_line_field_content_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Single_Line_Field_ContentArgs, 'where'>>;
  delete_single_line_field_content_by_pk?: Resolver<Maybe<ResolversTypes['single_line_field_content']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Single_Line_Field_Content_By_PkArgs, 'id'>>;
  delete_users?: Resolver<Maybe<ResolversTypes['users_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_UsersArgs, 'where'>>;
  delete_users_by_pk?: Resolver<Maybe<ResolversTypes['users']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Users_By_PkArgs, 'id'>>;
  insert_collaborators?: Resolver<Maybe<ResolversTypes['collaborators_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_CollaboratorsArgs, 'objects'>>;
  insert_collaborators_one?: Resolver<Maybe<ResolversTypes['collaborators']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Collaborators_OneArgs, 'object'>>;
  insert_entries?: Resolver<Maybe<ResolversTypes['entries_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_EntriesArgs, 'objects'>>;
  insert_entries_one?: Resolver<Maybe<ResolversTypes['entries']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Entries_OneArgs, 'object'>>;
  insert_entry_status?: Resolver<Maybe<ResolversTypes['entry_status_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Entry_StatusArgs, 'objects'>>;
  insert_entry_status_one?: Resolver<Maybe<ResolversTypes['entry_status']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Entry_Status_OneArgs, 'object'>>;
  insert_file_field?: Resolver<Maybe<ResolversTypes['file_field_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_File_FieldArgs, 'objects'>>;
  insert_file_field_content?: Resolver<Maybe<ResolversTypes['file_field_content_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_File_Field_ContentArgs, 'objects'>>;
  insert_file_field_content_one?: Resolver<Maybe<ResolversTypes['file_field_content']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_File_Field_Content_OneArgs, 'object'>>;
  insert_file_field_one?: Resolver<Maybe<ResolversTypes['file_field']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_File_Field_OneArgs, 'object'>>;
  insert_models?: Resolver<Maybe<ResolversTypes['models_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_ModelsArgs, 'objects'>>;
  insert_models_one?: Resolver<Maybe<ResolversTypes['models']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Models_OneArgs, 'object'>>;
  insert_multi_line_field?: Resolver<Maybe<ResolversTypes['multi_line_field_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Multi_Line_FieldArgs, 'objects'>>;
  insert_multi_line_field_content?: Resolver<Maybe<ResolversTypes['multi_line_field_content_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Multi_Line_Field_ContentArgs, 'objects'>>;
  insert_multi_line_field_content_one?: Resolver<Maybe<ResolversTypes['multi_line_field_content']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Multi_Line_Field_Content_OneArgs, 'object'>>;
  insert_multi_line_field_one?: Resolver<Maybe<ResolversTypes['multi_line_field']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Multi_Line_Field_OneArgs, 'object'>>;
  insert_projects?: Resolver<Maybe<ResolversTypes['projects_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_ProjectsArgs, 'objects'>>;
  insert_projects_one?: Resolver<Maybe<ResolversTypes['projects']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Projects_OneArgs, 'object'>>;
  insert_role_grants?: Resolver<Maybe<ResolversTypes['role_grants_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Role_GrantsArgs, 'objects'>>;
  insert_role_grants_one?: Resolver<Maybe<ResolversTypes['role_grants']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Role_Grants_OneArgs, 'object'>>;
  insert_roles?: Resolver<Maybe<ResolversTypes['roles_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_RolesArgs, 'objects'>>;
  insert_roles_one?: Resolver<Maybe<ResolversTypes['roles']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Roles_OneArgs, 'object'>>;
  insert_single_line_field?: Resolver<Maybe<ResolversTypes['single_line_field_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Single_Line_FieldArgs, 'objects'>>;
  insert_single_line_field_content?: Resolver<Maybe<ResolversTypes['single_line_field_content_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Single_Line_Field_ContentArgs, 'objects'>>;
  insert_single_line_field_content_one?: Resolver<Maybe<ResolversTypes['single_line_field_content']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Single_Line_Field_Content_OneArgs, 'object'>>;
  insert_single_line_field_one?: Resolver<Maybe<ResolversTypes['single_line_field']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Single_Line_Field_OneArgs, 'object'>>;
  insert_users?: Resolver<Maybe<ResolversTypes['users_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_UsersArgs, 'objects'>>;
  insert_users_one?: Resolver<Maybe<ResolversTypes['users']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Users_OneArgs, 'object'>>;
  login?: Resolver<Maybe<ResolversTypes['LoginOutput']>, ParentType, ContextType, RequireFields<Mutation_RootLoginArgs, 'id'>>;
  register?: Resolver<Maybe<ResolversTypes['RegisterOutput']>, ParentType, ContextType, RequireFields<Mutation_RootRegisterArgs, 'email' | 'firstName' | 'lastName'>>;
  update_collaborators?: Resolver<Maybe<ResolversTypes['collaborators_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_CollaboratorsArgs, 'where'>>;
  update_collaborators_by_pk?: Resolver<Maybe<ResolversTypes['collaborators']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Collaborators_By_PkArgs, 'pk_columns'>>;
  update_entries?: Resolver<Maybe<ResolversTypes['entries_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_EntriesArgs, 'where'>>;
  update_entries_by_pk?: Resolver<Maybe<ResolversTypes['entries']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Entries_By_PkArgs, 'pk_columns'>>;
  update_entry_status?: Resolver<Maybe<ResolversTypes['entry_status_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Entry_StatusArgs, 'where'>>;
  update_entry_status_by_pk?: Resolver<Maybe<ResolversTypes['entry_status']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Entry_Status_By_PkArgs, 'pk_columns'>>;
  update_file_field?: Resolver<Maybe<ResolversTypes['file_field_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_File_FieldArgs, 'where'>>;
  update_file_field_by_pk?: Resolver<Maybe<ResolversTypes['file_field']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_File_Field_By_PkArgs, 'pk_columns'>>;
  update_file_field_content?: Resolver<Maybe<ResolversTypes['file_field_content_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_File_Field_ContentArgs, 'where'>>;
  update_file_field_content_by_pk?: Resolver<Maybe<ResolversTypes['file_field_content']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_File_Field_Content_By_PkArgs, 'pk_columns'>>;
  update_models?: Resolver<Maybe<ResolversTypes['models_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_ModelsArgs, 'where'>>;
  update_models_by_pk?: Resolver<Maybe<ResolversTypes['models']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Models_By_PkArgs, 'pk_columns'>>;
  update_multi_line_field?: Resolver<Maybe<ResolversTypes['multi_line_field_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Multi_Line_FieldArgs, 'where'>>;
  update_multi_line_field_by_pk?: Resolver<Maybe<ResolversTypes['multi_line_field']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Multi_Line_Field_By_PkArgs, 'pk_columns'>>;
  update_multi_line_field_content?: Resolver<Maybe<ResolversTypes['multi_line_field_content_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Multi_Line_Field_ContentArgs, 'where'>>;
  update_multi_line_field_content_by_pk?: Resolver<Maybe<ResolversTypes['multi_line_field_content']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Multi_Line_Field_Content_By_PkArgs, 'pk_columns'>>;
  update_projects?: Resolver<Maybe<ResolversTypes['projects_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_ProjectsArgs, 'where'>>;
  update_projects_by_pk?: Resolver<Maybe<ResolversTypes['projects']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Projects_By_PkArgs, 'pk_columns'>>;
  update_role_grants?: Resolver<Maybe<ResolversTypes['role_grants_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Role_GrantsArgs, 'where'>>;
  update_role_grants_by_pk?: Resolver<Maybe<ResolversTypes['role_grants']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Role_Grants_By_PkArgs, 'pk_columns'>>;
  update_roles?: Resolver<Maybe<ResolversTypes['roles_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_RolesArgs, 'where'>>;
  update_roles_by_pk?: Resolver<Maybe<ResolversTypes['roles']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Roles_By_PkArgs, 'pk_columns'>>;
  update_single_line_field?: Resolver<Maybe<ResolversTypes['single_line_field_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Single_Line_FieldArgs, 'where'>>;
  update_single_line_field_by_pk?: Resolver<Maybe<ResolversTypes['single_line_field']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Single_Line_Field_By_PkArgs, 'pk_columns'>>;
  update_single_line_field_content?: Resolver<Maybe<ResolversTypes['single_line_field_content_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Single_Line_Field_ContentArgs, 'where'>>;
  update_single_line_field_content_by_pk?: Resolver<Maybe<ResolversTypes['single_line_field_content']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Single_Line_Field_Content_By_PkArgs, 'pk_columns'>>;
  update_users?: Resolver<Maybe<ResolversTypes['users_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_UsersArgs, 'where'>>;
  update_users_by_pk?: Resolver<Maybe<ResolversTypes['users']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Users_By_PkArgs, 'pk_columns'>>;
};

export type ProjectsResolvers<ContextType = any, ParentType extends ResolversParentTypes['projects'] = ResolversParentTypes['projects']> = {
  collaborators?: Resolver<Array<ResolversTypes['collaborators']>, ParentType, ContextType, RequireFields<ProjectsCollaboratorsArgs, never>>;
  collaborators_aggregate?: Resolver<ResolversTypes['collaborators_aggregate'], ParentType, ContextType, RequireFields<ProjectsCollaborators_AggregateArgs, never>>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  models?: Resolver<Array<ResolversTypes['models']>, ParentType, ContextType, RequireFields<ProjectsModelsArgs, never>>;
  models_aggregate?: Resolver<ResolversTypes['models_aggregate'], ParentType, ContextType, RequireFields<ProjectsModels_AggregateArgs, never>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['users'], ParentType, ContextType>;
  owner_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  roles?: Resolver<Array<ResolversTypes['roles']>, ParentType, ContextType, RequireFields<ProjectsRolesArgs, never>>;
  roles_aggregate?: Resolver<ResolversTypes['roles_aggregate'], ParentType, ContextType, RequireFields<ProjectsRoles_AggregateArgs, never>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Projects_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['projects_aggregate'] = ResolversParentTypes['projects_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['projects_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['projects']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Projects_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['projects_aggregate_fields'] = ResolversParentTypes['projects_aggregate_fields']> = {
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Projects_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['projects_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['projects_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Projects_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['projects_max_fields'] = ResolversParentTypes['projects_max_fields']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Projects_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['projects_min_fields'] = ResolversParentTypes['projects_min_fields']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Projects_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['projects_mutation_response'] = ResolversParentTypes['projects_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['projects']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Query_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['query_root'] = ResolversParentTypes['query_root']> = {
  collaborators?: Resolver<Array<ResolversTypes['collaborators']>, ParentType, ContextType, RequireFields<Query_RootCollaboratorsArgs, never>>;
  collaborators_aggregate?: Resolver<ResolversTypes['collaborators_aggregate'], ParentType, ContextType, RequireFields<Query_RootCollaborators_AggregateArgs, never>>;
  collaborators_by_pk?: Resolver<Maybe<ResolversTypes['collaborators']>, ParentType, ContextType, RequireFields<Query_RootCollaborators_By_PkArgs, 'id'>>;
  entries?: Resolver<Array<ResolversTypes['entries']>, ParentType, ContextType, RequireFields<Query_RootEntriesArgs, never>>;
  entries_aggregate?: Resolver<ResolversTypes['entries_aggregate'], ParentType, ContextType, RequireFields<Query_RootEntries_AggregateArgs, never>>;
  entries_by_pk?: Resolver<Maybe<ResolversTypes['entries']>, ParentType, ContextType, RequireFields<Query_RootEntries_By_PkArgs, 'id'>>;
  entry_status?: Resolver<Array<ResolversTypes['entry_status']>, ParentType, ContextType, RequireFields<Query_RootEntry_StatusArgs, never>>;
  entry_status_aggregate?: Resolver<ResolversTypes['entry_status_aggregate'], ParentType, ContextType, RequireFields<Query_RootEntry_Status_AggregateArgs, never>>;
  entry_status_by_pk?: Resolver<Maybe<ResolversTypes['entry_status']>, ParentType, ContextType, RequireFields<Query_RootEntry_Status_By_PkArgs, 'id'>>;
  file_field?: Resolver<Array<ResolversTypes['file_field']>, ParentType, ContextType, RequireFields<Query_RootFile_FieldArgs, never>>;
  file_field_aggregate?: Resolver<ResolversTypes['file_field_aggregate'], ParentType, ContextType, RequireFields<Query_RootFile_Field_AggregateArgs, never>>;
  file_field_by_pk?: Resolver<Maybe<ResolversTypes['file_field']>, ParentType, ContextType, RequireFields<Query_RootFile_Field_By_PkArgs, 'id'>>;
  file_field_content?: Resolver<Array<ResolversTypes['file_field_content']>, ParentType, ContextType, RequireFields<Query_RootFile_Field_ContentArgs, never>>;
  file_field_content_aggregate?: Resolver<ResolversTypes['file_field_content_aggregate'], ParentType, ContextType, RequireFields<Query_RootFile_Field_Content_AggregateArgs, never>>;
  file_field_content_by_pk?: Resolver<Maybe<ResolversTypes['file_field_content']>, ParentType, ContextType, RequireFields<Query_RootFile_Field_Content_By_PkArgs, 'id'>>;
  me?: Resolver<Array<ResolversTypes['users']>, ParentType, ContextType, RequireFields<Query_RootMeArgs, never>>;
  me_aggregate?: Resolver<ResolversTypes['users_aggregate'], ParentType, ContextType, RequireFields<Query_RootMe_AggregateArgs, never>>;
  models?: Resolver<Array<ResolversTypes['models']>, ParentType, ContextType, RequireFields<Query_RootModelsArgs, never>>;
  models_aggregate?: Resolver<ResolversTypes['models_aggregate'], ParentType, ContextType, RequireFields<Query_RootModels_AggregateArgs, never>>;
  models_by_pk?: Resolver<Maybe<ResolversTypes['models']>, ParentType, ContextType, RequireFields<Query_RootModels_By_PkArgs, 'id'>>;
  multi_line_field?: Resolver<Array<ResolversTypes['multi_line_field']>, ParentType, ContextType, RequireFields<Query_RootMulti_Line_FieldArgs, never>>;
  multi_line_field_aggregate?: Resolver<ResolversTypes['multi_line_field_aggregate'], ParentType, ContextType, RequireFields<Query_RootMulti_Line_Field_AggregateArgs, never>>;
  multi_line_field_by_pk?: Resolver<Maybe<ResolversTypes['multi_line_field']>, ParentType, ContextType, RequireFields<Query_RootMulti_Line_Field_By_PkArgs, 'id'>>;
  multi_line_field_content?: Resolver<Array<ResolversTypes['multi_line_field_content']>, ParentType, ContextType, RequireFields<Query_RootMulti_Line_Field_ContentArgs, never>>;
  multi_line_field_content_aggregate?: Resolver<ResolversTypes['multi_line_field_content_aggregate'], ParentType, ContextType, RequireFields<Query_RootMulti_Line_Field_Content_AggregateArgs, never>>;
  multi_line_field_content_by_pk?: Resolver<Maybe<ResolversTypes['multi_line_field_content']>, ParentType, ContextType, RequireFields<Query_RootMulti_Line_Field_Content_By_PkArgs, 'id'>>;
  projects?: Resolver<Array<ResolversTypes['projects']>, ParentType, ContextType, RequireFields<Query_RootProjectsArgs, never>>;
  projects_aggregate?: Resolver<ResolversTypes['projects_aggregate'], ParentType, ContextType, RequireFields<Query_RootProjects_AggregateArgs, never>>;
  projects_by_pk?: Resolver<Maybe<ResolversTypes['projects']>, ParentType, ContextType, RequireFields<Query_RootProjects_By_PkArgs, 'id'>>;
  role_grants?: Resolver<Array<ResolversTypes['role_grants']>, ParentType, ContextType, RequireFields<Query_RootRole_GrantsArgs, never>>;
  role_grants_aggregate?: Resolver<ResolversTypes['role_grants_aggregate'], ParentType, ContextType, RequireFields<Query_RootRole_Grants_AggregateArgs, never>>;
  role_grants_by_pk?: Resolver<Maybe<ResolversTypes['role_grants']>, ParentType, ContextType, RequireFields<Query_RootRole_Grants_By_PkArgs, 'id'>>;
  roles?: Resolver<Array<ResolversTypes['roles']>, ParentType, ContextType, RequireFields<Query_RootRolesArgs, never>>;
  roles_aggregate?: Resolver<ResolversTypes['roles_aggregate'], ParentType, ContextType, RequireFields<Query_RootRoles_AggregateArgs, never>>;
  roles_by_pk?: Resolver<Maybe<ResolversTypes['roles']>, ParentType, ContextType, RequireFields<Query_RootRoles_By_PkArgs, 'id'>>;
  single_line_field?: Resolver<Array<ResolversTypes['single_line_field']>, ParentType, ContextType, RequireFields<Query_RootSingle_Line_FieldArgs, never>>;
  single_line_field_aggregate?: Resolver<ResolversTypes['single_line_field_aggregate'], ParentType, ContextType, RequireFields<Query_RootSingle_Line_Field_AggregateArgs, never>>;
  single_line_field_by_pk?: Resolver<Maybe<ResolversTypes['single_line_field']>, ParentType, ContextType, RequireFields<Query_RootSingle_Line_Field_By_PkArgs, 'id'>>;
  single_line_field_content?: Resolver<Array<ResolversTypes['single_line_field_content']>, ParentType, ContextType, RequireFields<Query_RootSingle_Line_Field_ContentArgs, never>>;
  single_line_field_content_aggregate?: Resolver<ResolversTypes['single_line_field_content_aggregate'], ParentType, ContextType, RequireFields<Query_RootSingle_Line_Field_Content_AggregateArgs, never>>;
  single_line_field_content_by_pk?: Resolver<Maybe<ResolversTypes['single_line_field_content']>, ParentType, ContextType, RequireFields<Query_RootSingle_Line_Field_Content_By_PkArgs, 'id'>>;
  users?: Resolver<Array<ResolversTypes['users']>, ParentType, ContextType, RequireFields<Query_RootUsersArgs, never>>;
  users_aggregate?: Resolver<ResolversTypes['users_aggregate'], ParentType, ContextType, RequireFields<Query_RootUsers_AggregateArgs, never>>;
  users_by_pk?: Resolver<Maybe<ResolversTypes['users']>, ParentType, ContextType, RequireFields<Query_RootUsers_By_PkArgs, 'id'>>;
};

export type Role_GrantsResolvers<ContextType = any, ParentType extends ResolversParentTypes['role_grants'] = ResolversParentTypes['role_grants']> = {
  grant?: Resolver<ResolversTypes['grants'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['roles'], ParentType, ContextType>;
  role_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Role_Grants_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['role_grants_aggregate'] = ResolversParentTypes['role_grants_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['role_grants_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['role_grants']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Role_Grants_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['role_grants_aggregate_fields'] = ResolversParentTypes['role_grants_aggregate_fields']> = {
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Role_Grants_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['role_grants_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['role_grants_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Role_Grants_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['role_grants_max_fields'] = ResolversParentTypes['role_grants_max_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  role_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Role_Grants_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['role_grants_min_fields'] = ResolversParentTypes['role_grants_min_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  role_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Role_Grants_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['role_grants_mutation_response'] = ResolversParentTypes['role_grants_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['role_grants']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RolesResolvers<ContextType = any, ParentType extends ResolversParentTypes['roles'] = ResolversParentTypes['roles']> = {
  api_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  collaborators?: Resolver<Array<ResolversTypes['collaborators']>, ParentType, ContextType, RequireFields<RolesCollaboratorsArgs, never>>;
  collaborators_aggregate?: Resolver<ResolversTypes['collaborators_aggregate'], ParentType, ContextType, RequireFields<RolesCollaborators_AggregateArgs, never>>;
  display_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  grants?: Resolver<Array<ResolversTypes['role_grants']>, ParentType, ContextType, RequireFields<RolesGrantsArgs, never>>;
  grants_aggregate?: Resolver<ResolversTypes['role_grants_aggregate'], ParentType, ContextType, RequireFields<RolesGrants_AggregateArgs, never>>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  project?: Resolver<ResolversTypes['projects'], ParentType, ContextType>;
  project_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Roles_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['roles_aggregate'] = ResolversParentTypes['roles_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['roles_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['roles']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Roles_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['roles_aggregate_fields'] = ResolversParentTypes['roles_aggregate_fields']> = {
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Roles_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['roles_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['roles_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Roles_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['roles_max_fields'] = ResolversParentTypes['roles_max_fields']> = {
  api_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  display_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  project_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Roles_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['roles_min_fields'] = ResolversParentTypes['roles_min_fields']> = {
  api_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  display_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  project_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Roles_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['roles_mutation_response'] = ResolversParentTypes['roles_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['roles']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Single_Line_FieldResolvers<ContextType = any, ParentType extends ResolversParentTypes['single_line_field'] = ResolversParentTypes['single_line_field']> = {
  api_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  display_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hidden?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  model?: Resolver<ResolversTypes['models'], ParentType, ContextType>;
  model_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  required?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Single_Line_Field_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['single_line_field_aggregate'] = ResolversParentTypes['single_line_field_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['single_line_field_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['single_line_field']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Single_Line_Field_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['single_line_field_aggregate_fields'] = ResolversParentTypes['single_line_field_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['single_line_field_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Single_Line_Field_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['single_line_field_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['single_line_field_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['single_line_field_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['single_line_field_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['single_line_field_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['single_line_field_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['single_line_field_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['single_line_field_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['single_line_field_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Single_Line_Field_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['single_line_field_avg_fields'] = ResolversParentTypes['single_line_field_avg_fields']> = {
  position?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Single_Line_Field_ContentResolvers<ContextType = any, ParentType extends ResolversParentTypes['single_line_field_content'] = ResolversParentTypes['single_line_field_content']> = {
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  entry_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  field?: Resolver<ResolversTypes['single_line_field'], ParentType, ContextType>;
  field_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Single_Line_Field_Content_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['single_line_field_content_aggregate'] = ResolversParentTypes['single_line_field_content_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['single_line_field_content_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['single_line_field_content']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Single_Line_Field_Content_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['single_line_field_content_aggregate_fields'] = ResolversParentTypes['single_line_field_content_aggregate_fields']> = {
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Single_Line_Field_Content_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['single_line_field_content_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['single_line_field_content_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Single_Line_Field_Content_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['single_line_field_content_max_fields'] = ResolversParentTypes['single_line_field_content_max_fields']> = {
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  entry_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  field_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Single_Line_Field_Content_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['single_line_field_content_min_fields'] = ResolversParentTypes['single_line_field_content_min_fields']> = {
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  entry_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  field_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Single_Line_Field_Content_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['single_line_field_content_mutation_response'] = ResolversParentTypes['single_line_field_content_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['single_line_field_content']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Single_Line_Field_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['single_line_field_max_fields'] = ResolversParentTypes['single_line_field_max_fields']> = {
  api_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  display_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  model_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Single_Line_Field_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['single_line_field_min_fields'] = ResolversParentTypes['single_line_field_min_fields']> = {
  api_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  display_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  model_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Single_Line_Field_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['single_line_field_mutation_response'] = ResolversParentTypes['single_line_field_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['single_line_field']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Single_Line_Field_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['single_line_field_stddev_fields'] = ResolversParentTypes['single_line_field_stddev_fields']> = {
  position?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Single_Line_Field_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['single_line_field_stddev_pop_fields'] = ResolversParentTypes['single_line_field_stddev_pop_fields']> = {
  position?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Single_Line_Field_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['single_line_field_stddev_samp_fields'] = ResolversParentTypes['single_line_field_stddev_samp_fields']> = {
  position?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Single_Line_Field_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['single_line_field_sum_fields'] = ResolversParentTypes['single_line_field_sum_fields']> = {
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Single_Line_Field_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['single_line_field_var_pop_fields'] = ResolversParentTypes['single_line_field_var_pop_fields']> = {
  position?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Single_Line_Field_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['single_line_field_var_samp_fields'] = ResolversParentTypes['single_line_field_var_samp_fields']> = {
  position?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Single_Line_Field_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['single_line_field_variance_fields'] = ResolversParentTypes['single_line_field_variance_fields']> = {
  position?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Subscription_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['subscription_root'] = ResolversParentTypes['subscription_root']> = {
  collaborators?: SubscriptionResolver<Array<ResolversTypes['collaborators']>, "collaborators", ParentType, ContextType, RequireFields<Subscription_RootCollaboratorsArgs, never>>;
  collaborators_aggregate?: SubscriptionResolver<ResolversTypes['collaborators_aggregate'], "collaborators_aggregate", ParentType, ContextType, RequireFields<Subscription_RootCollaborators_AggregateArgs, never>>;
  collaborators_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['collaborators']>, "collaborators_by_pk", ParentType, ContextType, RequireFields<Subscription_RootCollaborators_By_PkArgs, 'id'>>;
  entries?: SubscriptionResolver<Array<ResolversTypes['entries']>, "entries", ParentType, ContextType, RequireFields<Subscription_RootEntriesArgs, never>>;
  entries_aggregate?: SubscriptionResolver<ResolversTypes['entries_aggregate'], "entries_aggregate", ParentType, ContextType, RequireFields<Subscription_RootEntries_AggregateArgs, never>>;
  entries_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['entries']>, "entries_by_pk", ParentType, ContextType, RequireFields<Subscription_RootEntries_By_PkArgs, 'id'>>;
  entry_status?: SubscriptionResolver<Array<ResolversTypes['entry_status']>, "entry_status", ParentType, ContextType, RequireFields<Subscription_RootEntry_StatusArgs, never>>;
  entry_status_aggregate?: SubscriptionResolver<ResolversTypes['entry_status_aggregate'], "entry_status_aggregate", ParentType, ContextType, RequireFields<Subscription_RootEntry_Status_AggregateArgs, never>>;
  entry_status_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['entry_status']>, "entry_status_by_pk", ParentType, ContextType, RequireFields<Subscription_RootEntry_Status_By_PkArgs, 'id'>>;
  file_field?: SubscriptionResolver<Array<ResolversTypes['file_field']>, "file_field", ParentType, ContextType, RequireFields<Subscription_RootFile_FieldArgs, never>>;
  file_field_aggregate?: SubscriptionResolver<ResolversTypes['file_field_aggregate'], "file_field_aggregate", ParentType, ContextType, RequireFields<Subscription_RootFile_Field_AggregateArgs, never>>;
  file_field_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['file_field']>, "file_field_by_pk", ParentType, ContextType, RequireFields<Subscription_RootFile_Field_By_PkArgs, 'id'>>;
  file_field_content?: SubscriptionResolver<Array<ResolversTypes['file_field_content']>, "file_field_content", ParentType, ContextType, RequireFields<Subscription_RootFile_Field_ContentArgs, never>>;
  file_field_content_aggregate?: SubscriptionResolver<ResolversTypes['file_field_content_aggregate'], "file_field_content_aggregate", ParentType, ContextType, RequireFields<Subscription_RootFile_Field_Content_AggregateArgs, never>>;
  file_field_content_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['file_field_content']>, "file_field_content_by_pk", ParentType, ContextType, RequireFields<Subscription_RootFile_Field_Content_By_PkArgs, 'id'>>;
  me?: SubscriptionResolver<Array<ResolversTypes['users']>, "me", ParentType, ContextType, RequireFields<Subscription_RootMeArgs, never>>;
  me_aggregate?: SubscriptionResolver<ResolversTypes['users_aggregate'], "me_aggregate", ParentType, ContextType, RequireFields<Subscription_RootMe_AggregateArgs, never>>;
  models?: SubscriptionResolver<Array<ResolversTypes['models']>, "models", ParentType, ContextType, RequireFields<Subscription_RootModelsArgs, never>>;
  models_aggregate?: SubscriptionResolver<ResolversTypes['models_aggregate'], "models_aggregate", ParentType, ContextType, RequireFields<Subscription_RootModels_AggregateArgs, never>>;
  models_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['models']>, "models_by_pk", ParentType, ContextType, RequireFields<Subscription_RootModels_By_PkArgs, 'id'>>;
  multi_line_field?: SubscriptionResolver<Array<ResolversTypes['multi_line_field']>, "multi_line_field", ParentType, ContextType, RequireFields<Subscription_RootMulti_Line_FieldArgs, never>>;
  multi_line_field_aggregate?: SubscriptionResolver<ResolversTypes['multi_line_field_aggregate'], "multi_line_field_aggregate", ParentType, ContextType, RequireFields<Subscription_RootMulti_Line_Field_AggregateArgs, never>>;
  multi_line_field_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['multi_line_field']>, "multi_line_field_by_pk", ParentType, ContextType, RequireFields<Subscription_RootMulti_Line_Field_By_PkArgs, 'id'>>;
  multi_line_field_content?: SubscriptionResolver<Array<ResolversTypes['multi_line_field_content']>, "multi_line_field_content", ParentType, ContextType, RequireFields<Subscription_RootMulti_Line_Field_ContentArgs, never>>;
  multi_line_field_content_aggregate?: SubscriptionResolver<ResolversTypes['multi_line_field_content_aggregate'], "multi_line_field_content_aggregate", ParentType, ContextType, RequireFields<Subscription_RootMulti_Line_Field_Content_AggregateArgs, never>>;
  multi_line_field_content_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['multi_line_field_content']>, "multi_line_field_content_by_pk", ParentType, ContextType, RequireFields<Subscription_RootMulti_Line_Field_Content_By_PkArgs, 'id'>>;
  projects?: SubscriptionResolver<Array<ResolversTypes['projects']>, "projects", ParentType, ContextType, RequireFields<Subscription_RootProjectsArgs, never>>;
  projects_aggregate?: SubscriptionResolver<ResolversTypes['projects_aggregate'], "projects_aggregate", ParentType, ContextType, RequireFields<Subscription_RootProjects_AggregateArgs, never>>;
  projects_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['projects']>, "projects_by_pk", ParentType, ContextType, RequireFields<Subscription_RootProjects_By_PkArgs, 'id'>>;
  role_grants?: SubscriptionResolver<Array<ResolversTypes['role_grants']>, "role_grants", ParentType, ContextType, RequireFields<Subscription_RootRole_GrantsArgs, never>>;
  role_grants_aggregate?: SubscriptionResolver<ResolversTypes['role_grants_aggregate'], "role_grants_aggregate", ParentType, ContextType, RequireFields<Subscription_RootRole_Grants_AggregateArgs, never>>;
  role_grants_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['role_grants']>, "role_grants_by_pk", ParentType, ContextType, RequireFields<Subscription_RootRole_Grants_By_PkArgs, 'id'>>;
  roles?: SubscriptionResolver<Array<ResolversTypes['roles']>, "roles", ParentType, ContextType, RequireFields<Subscription_RootRolesArgs, never>>;
  roles_aggregate?: SubscriptionResolver<ResolversTypes['roles_aggregate'], "roles_aggregate", ParentType, ContextType, RequireFields<Subscription_RootRoles_AggregateArgs, never>>;
  roles_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['roles']>, "roles_by_pk", ParentType, ContextType, RequireFields<Subscription_RootRoles_By_PkArgs, 'id'>>;
  single_line_field?: SubscriptionResolver<Array<ResolversTypes['single_line_field']>, "single_line_field", ParentType, ContextType, RequireFields<Subscription_RootSingle_Line_FieldArgs, never>>;
  single_line_field_aggregate?: SubscriptionResolver<ResolversTypes['single_line_field_aggregate'], "single_line_field_aggregate", ParentType, ContextType, RequireFields<Subscription_RootSingle_Line_Field_AggregateArgs, never>>;
  single_line_field_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['single_line_field']>, "single_line_field_by_pk", ParentType, ContextType, RequireFields<Subscription_RootSingle_Line_Field_By_PkArgs, 'id'>>;
  single_line_field_content?: SubscriptionResolver<Array<ResolversTypes['single_line_field_content']>, "single_line_field_content", ParentType, ContextType, RequireFields<Subscription_RootSingle_Line_Field_ContentArgs, never>>;
  single_line_field_content_aggregate?: SubscriptionResolver<ResolversTypes['single_line_field_content_aggregate'], "single_line_field_content_aggregate", ParentType, ContextType, RequireFields<Subscription_RootSingle_Line_Field_Content_AggregateArgs, never>>;
  single_line_field_content_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['single_line_field_content']>, "single_line_field_content_by_pk", ParentType, ContextType, RequireFields<Subscription_RootSingle_Line_Field_Content_By_PkArgs, 'id'>>;
  users?: SubscriptionResolver<Array<ResolversTypes['users']>, "users", ParentType, ContextType, RequireFields<Subscription_RootUsersArgs, never>>;
  users_aggregate?: SubscriptionResolver<ResolversTypes['users_aggregate'], "users_aggregate", ParentType, ContextType, RequireFields<Subscription_RootUsers_AggregateArgs, never>>;
  users_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['users']>, "users_by_pk", ParentType, ContextType, RequireFields<Subscription_RootUsers_By_PkArgs, 'id'>>;
};

export interface TimestamptzScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['timestamptz'], any> {
  name: 'timestamptz';
}

export type UsersResolvers<ContextType = any, ParentType extends ResolversParentTypes['users'] = ResolversParentTypes['users']> = {
  collaborator_in?: Resolver<Array<ResolversTypes['collaborators']>, ParentType, ContextType, RequireFields<UsersCollaborator_InArgs, never>>;
  collaborator_in_aggregate?: Resolver<ResolversTypes['collaborators_aggregate'], ParentType, ContextType, RequireFields<UsersCollaborator_In_AggregateArgs, never>>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  first_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  last_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  owned_projects?: Resolver<Array<ResolversTypes['projects']>, ParentType, ContextType, RequireFields<UsersOwned_ProjectsArgs, never>>;
  owned_projects_aggregate?: Resolver<ResolversTypes['projects_aggregate'], ParentType, ContextType, RequireFields<UsersOwned_Projects_AggregateArgs, never>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['users_aggregate'] = ResolversParentTypes['users_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['users_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['users']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['users_aggregate_fields'] = ResolversParentTypes['users_aggregate_fields']> = {
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Users_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['users_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['users_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['users_max_fields'] = ResolversParentTypes['users_max_fields']> = {
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  first_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  last_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['users_min_fields'] = ResolversParentTypes['users_min_fields']> = {
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  first_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  last_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['users_mutation_response'] = ResolversParentTypes['users_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['users']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['uuid'], any> {
  name: 'uuid';
}

export type Resolvers<ContextType = any> = {
  LoginOutput?: LoginOutputResolvers<ContextType>;
  RegisterOutput?: RegisterOutputResolvers<ContextType>;
  collaborators?: CollaboratorsResolvers<ContextType>;
  collaborators_aggregate?: Collaborators_AggregateResolvers<ContextType>;
  collaborators_aggregate_fields?: Collaborators_Aggregate_FieldsResolvers<ContextType>;
  collaborators_max_fields?: Collaborators_Max_FieldsResolvers<ContextType>;
  collaborators_min_fields?: Collaborators_Min_FieldsResolvers<ContextType>;
  collaborators_mutation_response?: Collaborators_Mutation_ResponseResolvers<ContextType>;
  entries?: EntriesResolvers<ContextType>;
  entries_aggregate?: Entries_AggregateResolvers<ContextType>;
  entries_aggregate_fields?: Entries_Aggregate_FieldsResolvers<ContextType>;
  entries_max_fields?: Entries_Max_FieldsResolvers<ContextType>;
  entries_min_fields?: Entries_Min_FieldsResolvers<ContextType>;
  entries_mutation_response?: Entries_Mutation_ResponseResolvers<ContextType>;
  entry_status?: Entry_StatusResolvers<ContextType>;
  entry_status_aggregate?: Entry_Status_AggregateResolvers<ContextType>;
  entry_status_aggregate_fields?: Entry_Status_Aggregate_FieldsResolvers<ContextType>;
  entry_status_max_fields?: Entry_Status_Max_FieldsResolvers<ContextType>;
  entry_status_min_fields?: Entry_Status_Min_FieldsResolvers<ContextType>;
  entry_status_mutation_response?: Entry_Status_Mutation_ResponseResolvers<ContextType>;
  file_field?: File_FieldResolvers<ContextType>;
  file_field_aggregate?: File_Field_AggregateResolvers<ContextType>;
  file_field_aggregate_fields?: File_Field_Aggregate_FieldsResolvers<ContextType>;
  file_field_avg_fields?: File_Field_Avg_FieldsResolvers<ContextType>;
  file_field_content?: File_Field_ContentResolvers<ContextType>;
  file_field_content_aggregate?: File_Field_Content_AggregateResolvers<ContextType>;
  file_field_content_aggregate_fields?: File_Field_Content_Aggregate_FieldsResolvers<ContextType>;
  file_field_content_avg_fields?: File_Field_Content_Avg_FieldsResolvers<ContextType>;
  file_field_content_max_fields?: File_Field_Content_Max_FieldsResolvers<ContextType>;
  file_field_content_min_fields?: File_Field_Content_Min_FieldsResolvers<ContextType>;
  file_field_content_mutation_response?: File_Field_Content_Mutation_ResponseResolvers<ContextType>;
  file_field_content_stddev_fields?: File_Field_Content_Stddev_FieldsResolvers<ContextType>;
  file_field_content_stddev_pop_fields?: File_Field_Content_Stddev_Pop_FieldsResolvers<ContextType>;
  file_field_content_stddev_samp_fields?: File_Field_Content_Stddev_Samp_FieldsResolvers<ContextType>;
  file_field_content_sum_fields?: File_Field_Content_Sum_FieldsResolvers<ContextType>;
  file_field_content_var_pop_fields?: File_Field_Content_Var_Pop_FieldsResolvers<ContextType>;
  file_field_content_var_samp_fields?: File_Field_Content_Var_Samp_FieldsResolvers<ContextType>;
  file_field_content_variance_fields?: File_Field_Content_Variance_FieldsResolvers<ContextType>;
  file_field_max_fields?: File_Field_Max_FieldsResolvers<ContextType>;
  file_field_min_fields?: File_Field_Min_FieldsResolvers<ContextType>;
  file_field_mutation_response?: File_Field_Mutation_ResponseResolvers<ContextType>;
  file_field_stddev_fields?: File_Field_Stddev_FieldsResolvers<ContextType>;
  file_field_stddev_pop_fields?: File_Field_Stddev_Pop_FieldsResolvers<ContextType>;
  file_field_stddev_samp_fields?: File_Field_Stddev_Samp_FieldsResolvers<ContextType>;
  file_field_sum_fields?: File_Field_Sum_FieldsResolvers<ContextType>;
  file_field_var_pop_fields?: File_Field_Var_Pop_FieldsResolvers<ContextType>;
  file_field_var_samp_fields?: File_Field_Var_Samp_FieldsResolvers<ContextType>;
  file_field_variance_fields?: File_Field_Variance_FieldsResolvers<ContextType>;
  float8?: GraphQLScalarType;
  grants?: GraphQLScalarType;
  json?: GraphQLScalarType;
  mime_types?: GraphQLScalarType;
  models?: ModelsResolvers<ContextType>;
  models_aggregate?: Models_AggregateResolvers<ContextType>;
  models_aggregate_fields?: Models_Aggregate_FieldsResolvers<ContextType>;
  models_max_fields?: Models_Max_FieldsResolvers<ContextType>;
  models_min_fields?: Models_Min_FieldsResolvers<ContextType>;
  models_mutation_response?: Models_Mutation_ResponseResolvers<ContextType>;
  multi_line_field?: Multi_Line_FieldResolvers<ContextType>;
  multi_line_field_aggregate?: Multi_Line_Field_AggregateResolvers<ContextType>;
  multi_line_field_aggregate_fields?: Multi_Line_Field_Aggregate_FieldsResolvers<ContextType>;
  multi_line_field_avg_fields?: Multi_Line_Field_Avg_FieldsResolvers<ContextType>;
  multi_line_field_content?: Multi_Line_Field_ContentResolvers<ContextType>;
  multi_line_field_content_aggregate?: Multi_Line_Field_Content_AggregateResolvers<ContextType>;
  multi_line_field_content_aggregate_fields?: Multi_Line_Field_Content_Aggregate_FieldsResolvers<ContextType>;
  multi_line_field_content_max_fields?: Multi_Line_Field_Content_Max_FieldsResolvers<ContextType>;
  multi_line_field_content_min_fields?: Multi_Line_Field_Content_Min_FieldsResolvers<ContextType>;
  multi_line_field_content_mutation_response?: Multi_Line_Field_Content_Mutation_ResponseResolvers<ContextType>;
  multi_line_field_max_fields?: Multi_Line_Field_Max_FieldsResolvers<ContextType>;
  multi_line_field_min_fields?: Multi_Line_Field_Min_FieldsResolvers<ContextType>;
  multi_line_field_mutation_response?: Multi_Line_Field_Mutation_ResponseResolvers<ContextType>;
  multi_line_field_stddev_fields?: Multi_Line_Field_Stddev_FieldsResolvers<ContextType>;
  multi_line_field_stddev_pop_fields?: Multi_Line_Field_Stddev_Pop_FieldsResolvers<ContextType>;
  multi_line_field_stddev_samp_fields?: Multi_Line_Field_Stddev_Samp_FieldsResolvers<ContextType>;
  multi_line_field_sum_fields?: Multi_Line_Field_Sum_FieldsResolvers<ContextType>;
  multi_line_field_var_pop_fields?: Multi_Line_Field_Var_Pop_FieldsResolvers<ContextType>;
  multi_line_field_var_samp_fields?: Multi_Line_Field_Var_Samp_FieldsResolvers<ContextType>;
  multi_line_field_variance_fields?: Multi_Line_Field_Variance_FieldsResolvers<ContextType>;
  mutation_root?: Mutation_RootResolvers<ContextType>;
  projects?: ProjectsResolvers<ContextType>;
  projects_aggregate?: Projects_AggregateResolvers<ContextType>;
  projects_aggregate_fields?: Projects_Aggregate_FieldsResolvers<ContextType>;
  projects_max_fields?: Projects_Max_FieldsResolvers<ContextType>;
  projects_min_fields?: Projects_Min_FieldsResolvers<ContextType>;
  projects_mutation_response?: Projects_Mutation_ResponseResolvers<ContextType>;
  query_root?: Query_RootResolvers<ContextType>;
  role_grants?: Role_GrantsResolvers<ContextType>;
  role_grants_aggregate?: Role_Grants_AggregateResolvers<ContextType>;
  role_grants_aggregate_fields?: Role_Grants_Aggregate_FieldsResolvers<ContextType>;
  role_grants_max_fields?: Role_Grants_Max_FieldsResolvers<ContextType>;
  role_grants_min_fields?: Role_Grants_Min_FieldsResolvers<ContextType>;
  role_grants_mutation_response?: Role_Grants_Mutation_ResponseResolvers<ContextType>;
  roles?: RolesResolvers<ContextType>;
  roles_aggregate?: Roles_AggregateResolvers<ContextType>;
  roles_aggregate_fields?: Roles_Aggregate_FieldsResolvers<ContextType>;
  roles_max_fields?: Roles_Max_FieldsResolvers<ContextType>;
  roles_min_fields?: Roles_Min_FieldsResolvers<ContextType>;
  roles_mutation_response?: Roles_Mutation_ResponseResolvers<ContextType>;
  single_line_field?: Single_Line_FieldResolvers<ContextType>;
  single_line_field_aggregate?: Single_Line_Field_AggregateResolvers<ContextType>;
  single_line_field_aggregate_fields?: Single_Line_Field_Aggregate_FieldsResolvers<ContextType>;
  single_line_field_avg_fields?: Single_Line_Field_Avg_FieldsResolvers<ContextType>;
  single_line_field_content?: Single_Line_Field_ContentResolvers<ContextType>;
  single_line_field_content_aggregate?: Single_Line_Field_Content_AggregateResolvers<ContextType>;
  single_line_field_content_aggregate_fields?: Single_Line_Field_Content_Aggregate_FieldsResolvers<ContextType>;
  single_line_field_content_max_fields?: Single_Line_Field_Content_Max_FieldsResolvers<ContextType>;
  single_line_field_content_min_fields?: Single_Line_Field_Content_Min_FieldsResolvers<ContextType>;
  single_line_field_content_mutation_response?: Single_Line_Field_Content_Mutation_ResponseResolvers<ContextType>;
  single_line_field_max_fields?: Single_Line_Field_Max_FieldsResolvers<ContextType>;
  single_line_field_min_fields?: Single_Line_Field_Min_FieldsResolvers<ContextType>;
  single_line_field_mutation_response?: Single_Line_Field_Mutation_ResponseResolvers<ContextType>;
  single_line_field_stddev_fields?: Single_Line_Field_Stddev_FieldsResolvers<ContextType>;
  single_line_field_stddev_pop_fields?: Single_Line_Field_Stddev_Pop_FieldsResolvers<ContextType>;
  single_line_field_stddev_samp_fields?: Single_Line_Field_Stddev_Samp_FieldsResolvers<ContextType>;
  single_line_field_sum_fields?: Single_Line_Field_Sum_FieldsResolvers<ContextType>;
  single_line_field_var_pop_fields?: Single_Line_Field_Var_Pop_FieldsResolvers<ContextType>;
  single_line_field_var_samp_fields?: Single_Line_Field_Var_Samp_FieldsResolvers<ContextType>;
  single_line_field_variance_fields?: Single_Line_Field_Variance_FieldsResolvers<ContextType>;
  subscription_root?: Subscription_RootResolvers<ContextType>;
  timestamptz?: GraphQLScalarType;
  users?: UsersResolvers<ContextType>;
  users_aggregate?: Users_AggregateResolvers<ContextType>;
  users_aggregate_fields?: Users_Aggregate_FieldsResolvers<ContextType>;
  users_max_fields?: Users_Max_FieldsResolvers<ContextType>;
  users_min_fields?: Users_Min_FieldsResolvers<ContextType>;
  users_mutation_response?: Users_Mutation_ResponseResolvers<ContextType>;
  uuid?: GraphQLScalarType;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
