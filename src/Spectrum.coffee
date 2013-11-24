# Conveniently load all of Spectrum by loading this file
# Classes can then be accessed like the following
# ``` 
# renderer = Spectrum.Renderer(ctx, id)
define ['renderer', 'player', 'compiler'], (Renderer, Player, Compiler) ->
    class Spectrum
        @Player = Player
        @Compiler = Compiler
        @Renderer = Renderer
