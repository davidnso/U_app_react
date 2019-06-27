using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace Module.Lib.RNModuleLib
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNModuleLibModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNModuleLibModule"/>.
        /// </summary>
        internal RNModuleLibModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNModuleLib";
            }
        }
    }
}
