using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace Sms.Communicator.RNSmsCommunicator
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNSmsCommunicatorModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNSmsCommunicatorModule"/>.
        /// </summary>
        internal RNSmsCommunicatorModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNSmsCommunicator";
            }
        }
    }
}
