/**
 * Conditional rendering
 * 
 * let content;
 * 
 * if (isLoggedIn) {
 *   content = <AdminPanel />;
 * } else {
 *   content = <LoginForm />;
 * }
 * return (
 *   <div>
 *    {content}
 *   </div>
 * );
 * 
 * SAME AS:
 * 
 * <div>
 *   {isLoggedIn ? (
 *     <AdminPanel />
 *   ) : (
 *     <LoginForm />
 *   )}
 * </div>
 * 
 * Optionally, you can use && instead if you don't have else option
 * 
 * <div>
      {isLoggedIn && <AdminPanel />}
    </div>
 */