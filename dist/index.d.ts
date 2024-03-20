import { type BlockTune } from '@editorjs/editorjs';
import { type BlockToolConstructorOptions, type TunesMenuConfig } from '@editorjs/editorjs/types/tools/index.js';
import './index.css';
type AlignmentTuneClass = {
    /**
     * Listeners to be called when the alignment changes.
     * This should be a static method on your Alignment Tool class
     */
    addChangeListener(listener: (blockId: string, direction: TextDirection) => void): void;
};
export type TextDirection = 'ltr' | "rtl";
export type IndentTuneConfig = Partial<IndentTuneConfigOptions>;
export type IndentTuneConfigOptions = Record<'indentSize' | 'maxIndent' | 'minIndent', number> & {
    orientation: 'horizontal' | 'vertical';
    customBlockIndentLimits: Record<string, Partial<Record<'min' | 'max', number>>>;
    /**
     * Custom keyboard indent handler.
     * Return 'indent' or 'unindent' if you want to change the current indentation
     */
    handleShortcut?: ((e: KeyboardEvent) => 'indent' | 'unindent' | undefined | void) | undefined;
    direction: TextDirection;
    alignmentTune: AlignmentTuneClass | null;
} & ({
    tuneName: string;
    multiblock: true;
} | {
    tuneName: null;
    multiblock: false;
});
export type IndentData = {
    indentLevel: number;
};
export default class IndentTune implements BlockTune {
    static get isTune(): boolean;
    private api;
    private block;
    private config;
    data: IndentData;
    private wrapper;
    constructor({ api, data, config, block }: BlockToolConstructorOptions<IndentData, IndentTuneConfigOptions>);
    render(): HTMLElement | TunesMenuConfig;
    wrap(pluginsContent: HTMLElement): HTMLElement;
    save(): IndentData;
    private get CSS();
    private get TuneNames();
    private get customInterval();
    private get maxIndent();
    private get minIndent();
    private get isDirectionInverted();
    private onKeyDown;
    private handleIndentLeft;
    private handleIndentRight;
    private indentBlock;
    private unIndentBlock;
    private toggleDisableStateForButtons;
    private getTuneButton;
    private getTuneByName;
    private applyStylesToWrapper;
    private getGlobalSelectedBlocks;
    private getWrapperBlockById;
    private alignmentChangeListener;
}
export {};
