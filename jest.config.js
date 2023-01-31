module.exports = async () => {
    transformIgnorePatterns = ["node_modules/(?!axios)/"]
    return {
      verbose: true,
    };
  };