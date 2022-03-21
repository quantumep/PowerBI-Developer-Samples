// ----------------------------------------------------------------------------
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// ----------------------------------------------------------------------------

/* eslint-disable @typescript-eslint/no-inferrable-types */

// Scope of AAD app. Use the below configuration to use all the permissions provided in the AAD app through Azure portal.
// Refer https://aka.ms/PowerBIPermissions for complete list of Power BI scopes
export const scopes: string[] = ["https://analysis.windows.net/powerbi/api/Report.Read.All"];

// Client Id (Application Id) of the AAD app.
export const clientId: string = "7fe33f8a-050c-4348-b199-2364d225b762";

// Id of the workspace where the report is hosted
export const workspaceId: string = "710ad5fe-7a98-45e1-acf6-260d2018aa4e";

// Id of the report to be embedded
export const reportId: string = "36957f9a-6206-496d-9f38-4516605e8c50";