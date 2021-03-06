import * as ts from 'typescript';
import { ReplaceNodeOperation } from './interfaces';
export declare function replaceResources(shouldTransform: (fileName: string) => boolean): ts.TransformerFactory<ts.SourceFile>;
export interface ResourceReplacement {
    resourcePaths: string[];
    replaceNodeOperation: ReplaceNodeOperation;
}
export declare function findResources(sourceFile: ts.SourceFile): ResourceReplacement[];
