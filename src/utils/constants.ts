import {ColumnDef, ColumnId, KanbanData, ReferenceData, ReferenceTab} from '../types';

export const VIEW_TYPE_KANBAN = 'scenario-kanban-dashboard';

export const COLUMN_DEFS: ColumnDef[] = [
	{id: 'ideas',           displayName: '💡 Ideas',            placeholder: '[[Note Title]] or plain text + Enter'},
	{id: 'plot-development', displayName: '🗺️ Plot Development', placeholder: '[[Note Title]] or plain text + Enter'},
	{id: 'project',         displayName: '🎬 Project',           placeholder: '[[Note Title]] or plain text + Enter'},
];

/** Default display names for the three pipeline columns */
export const DEFAULT_COLUMN_NAMES: Record<ColumnId, string> = {
	'ideas':            '💡 Ideas',
	'plot-development': '🗺️ Plot Development',
	'project':          '🎬 Project',
};

/** Default title shown at the top of the reference panel */
export const DEFAULT_REF_PANEL_TITLE = '📋 References';

export const DEFAULT_KANBAN_DATA: KanbanData = {
	columns: {
		'ideas': [],
		'plot-development': [],
		'project': [],
	},
};

/** Default tabs created on first launch */
export const DEFAULT_REFERENCE_TABS: ReferenceTab[] = [
	{id: 'characters',  displayName: 'Characters',  icon: '📁'},
	{id: 'settings',    displayName: 'World',        icon: '📁'},
	{id: 'story-beats', displayName: 'Story Beats',  icon: '📁'},
	{id: 'scenes',      displayName: 'Scenes',       icon: '📁'},
	{id: 'dialogues',   displayName: 'Dialogue',     icon: '📁'},
];

export const DEFAULT_REFERENCE_DATA: ReferenceData = {
	customTabs: DEFAULT_REFERENCE_TABS.map(t => ({...t})),
	items: Object.fromEntries(DEFAULT_REFERENCE_TABS.map(t => [t.id, []])),
};
