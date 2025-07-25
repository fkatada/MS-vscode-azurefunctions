/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { type IActionContext } from "@microsoft/vscode-azext-utils";
import { type CodeAction, type ConnectionKey } from "../../../constants";
import { type IConnectionTypesContext } from "./IConnectionTypesContext";

export interface ISetConnectionSettingContext extends IActionContext, IConnectionTypesContext {
    action: CodeAction;
    projectPath: string;

    // Remote connections for deploy
    [ConnectionKey.Storage]?: string;
    [ConnectionKey.EventHubs]?: string;
    [ConnectionKey.DTS]?: string;
    [ConnectionKey.DTSHub]?: string;
    [ConnectionKey.SQL]?: string;
}
