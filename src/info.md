shared — reusable functionality, detached from the specifics of the project/business.(e.g. UIKit, libs, API)
entities — business entities.(e.g., User, Product, Order)
features — user interactions, actions that bring business value to the user.(e.g. SendComment, AddToCart, UsersSearch)
widgets — compositional layer to combine entities and features into meaningful blocks.(e.g. IssuesList, UserProfile)
pages — compositional layer to construct full pages from entities, features and widgets.
processes (deprecated) — complex inter-page scenarios. (e.g., authentication)
app — app-wide settings, styles and providers.