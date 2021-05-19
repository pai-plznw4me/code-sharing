function save_snippet(){
    console.log('save_snippet working!')
}

function init() {
    //// Initialize Firebase.
    //// TODO: replace with your Firebase project configuration.
    var config = {
      apiKey: "<API_KEY>",
      authDomain: "firepad-gh-tests.firebaseapp.com",
      databaseURL: "https://firepad-gh-tests.firebaseio.com",
    };
    firebase.initializeApp(config);

    //// Get Firebase Database reference.
    var firepadRef = getExampleRef();

    //// Create CodeMirror (with line numbers and the JavaScript mode).
    var codeMirror = CodeMirror(
      document.getElementById("firepad-container"),
      {
        mode: { name: "python", version: 3, singleLineStringErrors: false },
        lineNumbers: true,
        indentUnit: 4,
        matchBrackets: true,
      }
    );

    //// Create Firepad.
    firepad = Firepad.fromCodeMirror(firepadRef, codeMirror, {
      defaultText:
        '// JavaScript Editing with Firepad!\nfunction go() {\n  var message = "Hello, world.";\n  console.log(message);\n}',
    });
    
  }

function getExampleRef() {
    var ref = firebase.database().ref();
    var hash = window.location.hash.replace(/#/g, "");
    if (hash) {
      ref = ref.child(hash);
    } else {
      ref = ref.push(); // generate unique location.
      window.location = window.location + "#" + ref.key; // add it as a hash to the URL.
    }
    if (typeof console !== "undefined") {
      console.log("Firebase data: ", ref.toString());
    }
    return ref;
  }