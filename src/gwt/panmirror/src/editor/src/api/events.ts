/*
 * events.ts
 *
 * Copyright (C) 2020 by RStudio, PBC
 *
 * Unless you have received this program directly from RStudio pursuant
 * to the terms of a commercial license agreement with RStudio, then
 * this program is licensed to you under the terms of version 3 of the
 * GNU Affero General Public License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * AGPL (http://www.gnu.org/licenses/agpl-3.0.txt) for more details.
 *
 */

export enum EditorEvent {
  Update = 'panmirrorUpdate',
  OutlineChange = 'panmirrorOutlineChange',
  StateChange = 'panmirrorStateChange',
  Resize = 'panmirrorResize',
  Layout = 'panmirrorLayout',
  Scroll = 'panmirrorScroll',
  Focus = 'panmirrorFocus',
}

export interface EditorEvents {
  subscribe: (event: EditorEvent, handler: VoidFunction) => VoidFunction;
  emit: (event: EditorEvent) => void;
}
