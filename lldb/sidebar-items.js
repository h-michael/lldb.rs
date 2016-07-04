initSidebarItems({"constant":[["FILE_PERMISSIONS_DIRECTORY_DEFAULT",""],["FILE_PERMISSIONS_EVERYONE_R",""],["FILE_PERMISSIONS_EVERYONE_RW",""],["FILE_PERMISSIONS_EVERYONE_RWX",""],["FILE_PERMISSIONS_EVERYONE_RX",""],["FILE_PERMISSIONS_EVERYONE_W",""],["FILE_PERMISSIONS_EVERYONE_X",""],["FILE_PERMISSIONS_FILE_DEFAULT",""],["FILE_PERMISSIONS_GROUP_EXECUTE",""],["FILE_PERMISSIONS_GROUP_READ",""],["FILE_PERMISSIONS_GROUP_RW",""],["FILE_PERMISSIONS_GROUP_RWX",""],["FILE_PERMISSIONS_GROUP_RX",""],["FILE_PERMISSIONS_GROUP_WRITE",""],["FILE_PERMISSIONS_USER_EXECUTE",""],["FILE_PERMISSIONS_USER_READ",""],["FILE_PERMISSIONS_USER_RW",""],["FILE_PERMISSIONS_USER_RWX",""],["FILE_PERMISSIONS_USER_RX",""],["FILE_PERMISSIONS_USER_WRITE",""],["FILE_PERMISSIONS_WORLD_EXECUTE",""],["FILE_PERMISSIONS_WORLD_READ",""],["FILE_PERMISSIONS_WORLD_RW",""],["FILE_PERMISSIONS_WORLD_RWX",""],["FILE_PERMISSIONS_WORLD_RX",""],["FILE_PERMISSIONS_WORLD_WRITE",""],["LAUNCH_FLAG_CLOSE_TTY_ON_EXIT","Close the open TTY on exit."],["LAUNCH_FLAG_DEBUG","Stop as soon as the process launches to allow the process to be debugged."],["LAUNCH_FLAG_DETACH_ON_ERRROR","If set, then the client stub should detach rather than killing the debugee."],["LAUNCH_FLAG_DISABLE_ASLR","Disable address space layout randomization (ASLR)."],["LAUNCH_FLAG_DISABLE_STDIO","Disable stdio for the inferior process (e.g. for a GUI app)."],["LAUNCH_FLAG_DONT_SET_EXIT_STATUS","If you are going to hand the process off (e.g. to debugserver), set this flag so that lldb and the handee don't race to set its exit status."],["LAUNCH_FLAG_EXEC","Exec when launching and turn the calling process into a new process."],["LAUNCH_FLAG_LAUNCH_IN_SEPARATE_PROCESS_GROUP","Launch the process in a separate process group."],["LAUNCH_FLAG_LAUNCH_IN_SHELL","Launch the process inside a shell to get shell expansion."],["LAUNCH_FLAG_LAUNCH_IN_TTY","Launch the process in a new TTY if supported by the host."],["LAUNCH_FLAG_SHELL_EXPAND_ARGUMENTS","Perform shell-style argument expansion."],["LAUNCH_FLAG_STOP_AT_ENTRY","Stop at the program entry point instead of auto-continuing when launching or attaching at entry point."],["PERMISSIONS_EXECUTABLE",""],["PERMISSIONS_READABLE",""],["PERMISSIONS_WRITABLE",""],["SYMBOL_CONTEXT_ITEM_BLOCK","Set when the deepest block is requested from a query or was located in the query results."],["SYMBOL_CONTEXT_ITEM_COMPUNIT","Set when a compilation unit is requested from a query or was located in the query results."],["SYMBOL_CONTEXT_ITEM_EVERYTHING","Indicates to try and look everything up during a routine symbol context query. This doesn't actually include looking up a variable."],["SYMBOL_CONTEXT_ITEM_FUNCTION","Set when a function is requested from a query or was located in the query results."],["SYMBOL_CONTEXT_ITEM_LINE_ENTRY","Set when a line entry is requested from a query or was located in the query results."],["SYMBOL_CONTEXT_ITEM_MODULE","Set when a module is requested from a query or was located in the query results."],["SYMBOL_CONTEXT_ITEM_SYMBOL","Set when a symbol is requested from a query or was located in the query results."],["SYMBOL_CONTEXT_ITEM_TARGET","Set when a target is requested from a query or was located in the query results."],["SYMBOL_CONTEXT_ITEM_VARIABLE","Set when a global or static variable is requested from a query, or was located in the query results."],["TYPE_CLASS_ANY",""],["TYPE_CLASS_ARRAY",""],["TYPE_CLASS_BLOCKPOINTER",""],["TYPE_CLASS_BUILTIN",""],["TYPE_CLASS_CLASS",""],["TYPE_CLASS_COMPLEX_FLOAT",""],["TYPE_CLASS_COMPLEX_INTEGER",""],["TYPE_CLASS_ENUMERATION",""],["TYPE_CLASS_FUNCTION",""],["TYPE_CLASS_INVALID",""],["TYPE_CLASS_MEMBER_POINTER",""],["TYPE_CLASS_OBJC_INTERFACE",""],["TYPE_CLASS_OBJC_OBJECT",""],["TYPE_CLASS_OBJC_OBJECT_POINTER",""],["TYPE_CLASS_OTHER",""],["TYPE_CLASS_POINTER",""],["TYPE_CLASS_REFERENCE",""],["TYPE_CLASS_STRUCT",""],["TYPE_CLASS_TYPEDEF",""],["TYPE_CLASS_UNION",""],["TYPE_CLASS_VECTOR",""]],"enum":[["AccessType",""],["AddressClass",""],["BasicType",""],["BreakpointEventType",""],["ByteOrder","Byte order definitions."],["CommandArgumentType",""],["CommandFlags",""],["ConnectionStatus",""],["DescriptionLevel",""],["DisassemblyFlavor","Which syntax should be used in disassembly?"],["DynamicValueType",""],["EmulateInstructionOptions",""],["Encoding","Register encoding defintions."],["ErrorType",""],["ExpressionEvaluationPhase",""],["ExpressionResults",""],["Format","Display format definitions."],["FrameComparison",""],["FunctionNameType",""],["GdbSignal",""],["InputReaderAction",""],["InputReaderGranularity",""],["InstrumentationRuntimeType",""],["LanguageType",""],["MatchType",""],["MemberFunctionKind",""],["PathType",""],["QueueItemKind",""],["QueueKind",""],["RegisterKind",""],["ReturnStatus",""],["RunMode","Thread run modes."],["ScriptLanguage",""],["SectionType",""],["StateType","Process and thread states."],["StopReason","Thread stop reasons."],["SymbolType",""],["TemplateArgumentKind",""],["TypeFlags",""],["TypeOptions",""],["TypeSummaryCapping",""],["ValueType",""],["WatchpointEventType",""],["WatchpointKind",""]],"struct":[["FilePermissions",""],["LaunchFlags",""],["Permissions",""],["SBAddress","A section + offset based address class."],["SBAttachInfo","Configuration for attaching to a process."],["SBBlock","A lexical block."],["SBBreakpoint","A logical breakpoint and its associated settings."],["SBBroadcaster","An entity which can broadcast events."],["SBCompileUnit","A compilation unit or compiled source file."],["SBData","A block of data."],["SBDebugger","Creates [`SBTarget`]s, provides access to them and manages the overall debugging experience."],["SBError","A container for holding any error code."],["SBEvent","An event."],["SBFileSpec","A file specification that divides the path into a directory and basename."],["SBFrame","One of the stack frames associated with a thread."],["SBFunction","A generic function, which can be inlined or not."],["SBInstruction","A machine instruction."],["SBInstructionList","A list of [machine instructions]."],["SBInstructionListIter","An iterator over an [`SBInstructionList`]."],["SBLaunchInfo","Configuration for launching a process."],["SBLineEntry","Specifies an association with a contiguous range of instructions and a source file location."],["SBListener","Listen for debugger events."],["SBModule","An executable image and its associated object and symbol files."],["SBModuleSpec","A description of an `SBModule`."],["SBPlatform","A platform that can represent the current host or a remote host debug platform."],["SBProcess","The process associated with the target program."],["SBStream","A destination for streaming data output. By default, this is a string stream, but it can be redirected to a file."],["SBStringList","A list of strings."],["SBStringListIter","An iterator over an `SBStringList`."],["SBSymbol","The symbol possibly associated with a stack frame."],["SBSymbolContext","A container that stores various debugger related info."],["SBTarget","The target program running under the debugger."],["SBThread","A thread of execution."],["SBValue","The value of a variable, register or expression."],["SymbolContextItem","These mask bits allow a common interface for queries that can limit the amount of information that gets parsed to only the information that is requested. These bits also can indicate what actually did get resolved during query function calls."],["TypeClass",""]],"type":[["lldb_addr_t",""],["lldb_offset_t",""],["lldb_pid_t",""],["lldb_tid_t",""],["lldb_user_id_t",""]]});