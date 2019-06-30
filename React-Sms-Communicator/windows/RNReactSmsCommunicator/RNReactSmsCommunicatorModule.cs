using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace React.Sms.Communicator.RNReactSmsCommunicator
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNReactSmsCommunicatorModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNReactSmsCommunicatorModule"/>.
        /// </summary>
        internal RNReactSmsCommunicatorModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNReactSmsCommunicator";
            }
        }
    }
}
